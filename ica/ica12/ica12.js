
document.addEventListener('DOMContentLoaded', getQuote); // Load a quote when the page is initially loaded

const newQuoteButton = document.querySelector('#js-new-quote');
newQuoteButton.addEventListener('click', getQuote);

function getQuote() {
  const apiUrl = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';

  fetch(apiUrl)
    .then(response => {
      // Check if the response status is ok (status code 200)
      if (response.ok) {
        return response.json(); // Parse the response as JSON
      } else {
        throw new Error('Failed to fetch quote');
      }
    })
    .then(data => {
      // Save the quote and answer for later use
      const quote = data.question;
      const answer = data.answer;

      // Display the quote in the HTML
      displayQuote(quote);

      // Save the answer to a data attribute in the HTML for later retrieval
      document.getElementById('js-answer-text').setAttribute('data-answer', answer);
      document.getElementById('js-answer-text').textContent = " "
    })
    .catch(error => {
      // If it fails, output an error message to the console and via alert
      console.error(error);
      alert('Failed to fetch quote. Please try again.');
    });
}

function displayQuote(quote) {
  const quoteTextElement = document.getElementById('js-quote-text');
  quoteTextElement.textContent = quote;
}
const tweetButton = document.querySelector('#js-tweet');
tweetButton.addEventListener('click', showAnswer);

function showAnswer() {
  const answerText = document.getElementById('js-answer-text').getAttribute('data-answer');
  console.log('Answer:', answerText);
  document.getElementById('js-answer-text').textContent = answerText;
}

