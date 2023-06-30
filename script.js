const quote = document.getElementById('quote');
const author = document.getElementById('author');

const api_url = 'https://api.quotable.io/random';

async function getQuote(url) {
    const response = await fetch(url);
    const data = await response.json();
    quote.textContent = data.content;
    author.textContent = data.author;
}

getQuote(api_url);

function tweet()
{
    window.open('https://twitter.com/intent/tweet?text='+quote.innerHTML,'Quote of the day',"width=600,height=500");
}
