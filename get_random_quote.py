import requests

def get_random_quote():
    url = "http://api.forismatic.com/api/1.0/"
    params = {
        "method": "getQuote",
        "format": "json",
        "lang": "en"
    }
    try:
        response = requests.get(url, params=params)
        response.raise_for_status()
        quote_data = response.json()
        return quote_data["quoteText"], quote_data.get("quoteAuthor", "Unknown")
    except requests.RequestException as error:
        print(f"Error retrieving quote: {error}")
        return None, None

if __name__ == "__main__":
    quote, author = get_random_quote()
    if quote:
        print(f"{quote} — {author}")

