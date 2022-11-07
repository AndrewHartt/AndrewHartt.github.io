window.addEventListener('load', getQuote);
window.addEventListener('load', getQuote2);

const quoteButton = document.querySelector('.new-quote');
quoteButton.addEventListener('click', getQuote);

const quoteButton2 = document.querySelector('.new-quote2');
quoteButton2.addEventListener('click', getQuote2);

const endpoint = 'https://catfact.ninja/fact';
const endpoint2 = 'https://dog.ceo/api/breeds/image/random';

async function getQuote() {
    console.log('test click worked');
    let text = await fetch(endpoint);
    let response = await text.text();
    let json_response = JSON.parse(response);
    console.log(json_response['fact']);
    displayQuote(json_response['fact']);
}

async function getQuote2() {
        console.log('test click succesful!')
        let text = await fetch(endpoint2);
        let response = await text.text();
        let json_response = JSON.parse(response);
        console.log(json_response['message']);
        displayQuote2(json_response['message']);
    }

async function displayQuote(x) {
    document.getElementById('js-quote-text').textContent = x;
}

async function displayQuote2(y) {
    document.getElementById('js-quote2-text').textContent= y;
}
