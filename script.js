function loadRandomQuote() {
    fetch('http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en')
        .then(response => response.json())
        .then(data => {
            document.getElementById('quote').textContent = `"${data.quoteText}" — ${data.quoteAuthor || 'Unknown'}`;
        })
        .catch(error => {
            console.error('Error fetching quote:', error);
        });
}

