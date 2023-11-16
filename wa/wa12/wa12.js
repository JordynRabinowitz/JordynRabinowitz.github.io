
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
