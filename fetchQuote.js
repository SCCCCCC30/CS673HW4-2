const fetch = require('node-fetch');

async function getRandomQuote() {
    const url = 'http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en';
    try {
        const response = await fetch(url);
        const quoteData = await response.json();
        const quote = quoteData.quoteText;
        const author = quoteData.quoteAuthor || 'Unknown';
        console.log(`"${quote}" — ${author}`);
    } catch (error) {
        console.error(`Error retrieving quote: ${error}`);
    }
}

getRandomQuote();
