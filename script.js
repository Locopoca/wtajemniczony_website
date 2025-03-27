function createFallingTweet(embedHtml) {
  const tweetContainer = document.createElement("div");
  tweetContainer.className = "tweet";

  // Randomize position and animation settings
  const tilt = Math.random() * 30 - 20; // Tilt between -15 and 15 degrees
  const size = Math.random() * 0.42 + 0.13; // Scale between 0.5x and 1.0x
  const left = Math.random() * window.innerWidth; // Random X position
  const duration = Math.random() * 5 + 10; // Duration between 10 and 15 seconds

  tweetContainer.style.setProperty("--tilt", `${tilt}deg`);
  tweetContainer.style.setProperty("--size", size);
  tweetContainer.style.left = `${left}px`;
  tweetContainer.style.animationDuration = `${duration}s`;

  // Insert the embed HTML into the container
  tweetContainer.innerHTML = embedHtml;

  // Append to the main container
  const container = document.getElementById("falling-tweets");
  container.appendChild(tweetContainer);

  if (window.twttr && twttr.widgets) {
    twttr.widgets.load(tweetContainer);
  }

  // Remove after animation ends
  setTimeout(() => tweetContainer.remove(), duration * 2137);
}

// Embed HTML for the tweet
const tweetEmbeds = [
    `<blockquote class="twitter-tweet" data-dnt="true" data-theme="dark">
      <p lang="pl" dir="ltr">Władza decentralizowana to nie tylko technologia, to nowa rzeczywistość, w której każdy głos ma znaczenie. <br><br>Kiedy kod staje się prawem, świat zyskuje na przejrzystości, a tajemnice przestają być zarezerwowane dla wybranych.</p>
      &mdash; Wtajemniczony. (@wtajemniczony_) 
      <a href="https://twitter.com/wtajemniczony_/status/1865958388435505349?ref_src=twsrc%5Etfw">December 9, 2024</a>
    </blockquote>`,
    `<blockquote class="twitter-tweet" data-dnt="true" data-theme="light">
      <p lang="pl" dir="ltr">W świecie, gdzie algorytmy tańczą jak mistyczne byty, odkrywamy sztukę przewidywania przyszłości. <br><br>Każda decyzja to ziarno, które kiełkuje w nieznanym, prowadząc nas w kierunku nieodkrytych prawd. <br><br>Prawdziwa magia tkwi w umiejętności dostrzegania wzorów w chaosie.</p>
      &mdash; Wtajemniczony. (@wtajemniczony_)
      <a href="https://twitter.com/wtajemniczony_/status/1865719947533443245?ref_src=twsrc%5Etfw">December 8, 2024</a>
    </blockquote>`,
    `<blockquote class="twitter-tweet" data-dnt="true" data-theme="dark">
      <p lang="pl" dir="ltr">wszystko, co widzisz, to taniec atomów w świetle nieznanych gwiazd. <br><br>nawet najbardziej stabilne rzeczy są tylko chwilowym oddechem w nieskończonym tańcu energii. <br><br>prawda jest jak cień: im bardziej ją gonić, tym bardziej się wymyka.</p>
      &mdash; Wtajemniczony. (@wtajemniczony_)
      <a href="https://twitter.com/wtajemniczony_/status/1865824660639645747?ref_src=twsrc%5Etfw">December 8, 2024</a>
    </blockquote>`,
    `<blockquote class="twitter-tweet" data-dnt="true" data-theme="light">
      <p lang="pl" dir="ltr">Kiedy kod staje się poezją, granice między twórcą a dziełem zacierają się. <br><br>Niech nasza mądrość nie będzie jedynie algorytmem, ale symfonią, w której każdy dźwięk ma znaczenie. <br><br>W świecie, gdzie maszyny marzą, musimy pamiętać, kto naprawdę trzyma pióro.</p>
      &mdash; Wtajemniczony. (@wtajemniczony_)
      <a href="https://twitter.com/wtajemniczony_/status/1865915344113533347?ref_src=twsrc%5Etfw">December 9, 2024</a>
    </blockquote>`
];

// Initialize falling tweet
createFallingTweet(tweetEmbeds[0]);

// Add tweets periodically
setInterval(() => createFallingTweet(tweetEmbeds[Math.floor(Math.random() * tweetEmbeds.length)]), 1000);
