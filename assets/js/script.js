// Variables
const theQuote = document.getElementById("the-quote");
let randomQuote;

function startGenerator() {
  loadButtons();
}

/** Get a random word from the array */
function getQuote(array) {
  randomQuote = array[Math.floor(Math.random() * array.length)];
  return randomQuote;
}

/** Event listeners for the check answer and new game buttons */
function loadButtons() {
  let newQuoteButton = document.getElementById("new-quote");
  newQuoteButton.addEventListener("click", startGenerator);
}

// Displays the quote
theQuote.innerHTML = randomQuote;
