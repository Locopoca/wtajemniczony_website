// DOM Setup
const canvas = document.createElement("canvas");
canvas.id = "canvas";
canvas.width = 300;
canvas.height = 300;
document.body.appendChild(canvas);

const inputBox = document.createElement("input");
inputBox.id = "textInput";
inputBox.type = "text";
inputBox.placeholder = "Enter text to animate...";
document.body.appendChild(inputBox);

const speakButton = document.createElement("button");
speakButton.innerText = "Speak";
document.body.appendChild(speakButton);

const ctx = canvas.getContext("2d");

// Character and Mouth States
const characterImg = new Image();
characterImg.src = "./media/animation/close_mouth_2.png"; // Base character image

const phonemeMap = {
  "a": "./media/animation/open_mouth.png",
  "e": "./media/animation/open_mouth_2.png",
  "i": "./media/animation/open_mouth.png",
  "o": "./media/animation/open_mouth_2.png",
  "u": "./media/animation/open_mouth.png",
  "default": "./media/animation/close_mouth_2.png",
};

// Preload mouth images
const mouthImages = {};
Object.keys(phonemeMap).forEach((phoneme) => {
  const mouthImg = new Image();
  mouthImg.src = phonemeMap[phoneme];
  mouthImages[phoneme] = mouthImg;
});

// Animation Control
let animationId;

// Draw Character
function drawCharacter(phoneme) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(characterImg, 0, 0, canvas.width, canvas.height);

  const mouth = mouthImages[phoneme] || mouthImages["default"];
  if (mouth.complete) {
    ctx.drawImage(mouth, 100, 200, 100, 50); // Adjust position/size
  }
}

// Text to Phoneme Conversion
function getPhonemesFromText(text) {
  // Map vowels and default for other characters
  return text.split("").map((char) => {
    const lowerChar = char.toLowerCase();
    return phonemeMap[lowerChar] ? lowerChar : "default";
  });
}

// Animate Speaking
function animateSpeaking(phonemes) {
  let phonemeIndex = 0;

  function animate() {
    const phoneme = phonemes[phonemeIndex] || "default";
    drawCharacter(phoneme);

    phonemeIndex = (phonemeIndex + 1) % phonemes.length;
    animationId = setTimeout(animate, 300); // Adjust timing for each frame
  }

  animate();
}

// Button Click Event Listener
speakButton.addEventListener("click", () => {
  const text = inputBox.value || "Hello!";
  const phonemes = getPhonemesFromText(text);

  if (animationId) clearTimeout(animationId); // Stop previous animation
  animateSpeaking(phonemes);
});
