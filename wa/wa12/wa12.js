
// const newQuoteButton = document.querySelector('#quote-btn');
// var category = document.getElementById('categorySelect').value;

// if (category.trim() === '') {
//     alert('Please select a category');
// }

// newQuoteButton.addEventListener('click', getQuote(category));

// function getQuote(category) {
//     const apiKey = 'Lv0DmdL4JfO79EvAGQ9ZMQ==8r5JihO0Lk2fuYP9';
//     const apiUrl = 'https://api.api-ninjas.com/v1/quotes?category=' + category;

//     fetch(apiUrl, {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${apiKey}`
//         }
//     })
//     .then(response => {
//         // Check if the response status is ok (status code 200)
//         if (response.ok) {
//             return response.json(); // Parse the response as JSON
//         } else {
//             throw new Error('Failed to fetch quote');
//         }
//     })
//     .then(data => {
//         // Save the quote and answer for later use
//         const quote = data.quote;
//         const author = data.author;

//         // Display the quote in the HTML
//         displayQuote(quote);

//         // Save the answer to a data attribute in the HTML for later retrieval
//         document.getElementById('author-text').setAttribute('data-author', author);
//         document.getElementById('author-text').textContent = " ";
//     })
//     .catch(error => {
//         // If it fails, output an error message to the console and via alert
//         console.error(error);
//         alert('Failed to fetch quote. Please try again.');
//     });
// }

// function displayQuote(quote) {
//     const quoteTextElement = document.getElementById('quote-text');
//     quoteTextElement.textContent = quote;
//   }

// wa12.js

document.addEventListener('DOMContentLoaded', function () {
    const newQuoteButton = document.getElementById('quote-btn');

    newQuoteButton.addEventListener('click', function () {
        getQuote();
    });

    function getQuote() {
        const category = document.getElementById('categorySelect').value;
        const apiKey = 'Lv0DmdL4JfO79EvAGQ9ZMQ==8r5JihO0Lk2fuYP9'; // Replace with your actual API key
        const apiUrl = 'https://api.api-ninjas.com/v1/quotes?category=' + category;

        fetch(apiUrl, {
            method: 'GET',
            headers: {
                'X-Api-Key': apiKey,
                'Content-Type': 'application/json',
            }
            
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Failed to fetch quote');
            }
        })
        .then(data => {
            const quote = data[0].quote;
            console.log(data);
            console.log(quote);
            displayQuote(quote);
        })
        .catch(error => {
            console.error(error);
            alert('Failed to fetch quote. Please try again.');
        });
    }

    function displayQuote(quote) {
        const quoteTextElement = document.getElementById('quote-text');
        quoteTextElement.textContent = quote;
        quoteTextElement.setAttribute("style", "visibility: visible");
    }
});
