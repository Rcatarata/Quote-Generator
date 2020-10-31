const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterButton = document.getElementById('twitter');
const newQuoteButton = document.getElementById('new-quote');

// Get Quote from API
async function getQuote() {
    const proxyUrl = 'http://cors-anywhere.herokuapp.com/'
    const apiURL = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    try{
        const response = await fetch(proxyUrl + apiURL);
        const data = await response.json();
        console.log(data);
    } catch(error){
        getQuote();
        
    }

}

//On Load
getQuote();