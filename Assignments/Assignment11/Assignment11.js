window.addEventListener('load', getQuote);
window.addEventListener('load', getQuote2);

const quoteButton = document.querySelector('.new-quote');
quoteButton.addEventListener('click', getQuote);

const quoteButton2 = document.querySelector('.new-quote2');
quoteButton2.addEventListener('click', getQuote2);

const endpoint = 'https://catfact.ninja/fact';
const endpoint2 = 'https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=1';

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
        let image = await fetch(endpoint2);
        let response = await text.text();
        let json_response = JSON.parse(response);
        console.log(json_response['fact']);
        displayQuote2(json_response['fact']);
    }

async function displayQuote(x) {
    document.getElementById('js-quote-text').textContent = x;
}

async function displayQuote2(y) {
    document.getElementById('js-quote2-text').textContent= y;
}
