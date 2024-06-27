const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const btnQuote = document.getElementById('new-quote');
const loader = document.getElementById('loader');

// let apiQuotes = [];


function loading () {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

function complete () {
    quoteContainer.hidden = false;
    loader.hidden = true;
}

function newQuote () {
    loading();
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
 
    if (!quote.author) {
        quoteAuthor.textContent = 'Unknown';
    } else {
        quoteAuthor.textContent = quote.author;
    }

    if (quote.text.length > 120) {
        quoteText.classList.add('long-text');

     } else {
        quoteText.classList.remove('long-text');

        
    }
    
    quoteText.textContent = quote.text;
    complete();
}

// event listener
btnQuote.addEventListener('click', newQuote);

async function getQuote () {
    loading();
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {

    }
}

getQuote();
