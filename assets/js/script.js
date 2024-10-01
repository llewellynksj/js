// Variables
const theQuote = document.getElementById("the-quote");
const theAuthor = document.getElementById("the-author");

let randomQuote;

function startGenerator() {
  loadButtons();
  console.log("starting game");
  getQuote(quotes);
}

/** Get a random word from the array */
function getQuote(array) {
  randomQuote = array[Math.floor(Math.random() * array.length)];
  theQuote.innerHTML = randomQuote.quote; // Display the quote
  theAuthor.innerHTML = randomQuote.author;
  console.log(randomQuote);
  return randomQuote;
}

/** Event listeners for the check answer and new game buttons */
function loadButtons() {
  let newQuoteButton = document.getElementById("new-quote");
  newQuoteButton.addEventListener("click", startGenerator);
}

// Displays the quote
theQuote.innerHTML = randomQuote;

startGenerator();
