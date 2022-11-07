window.addEventListener('load', getQuote);

const quoteButton = document.querySelector('.new-quote');
quoteButton.addEventListener('click', getQuote);

const endpoint = 'https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=1';
const imagepoint = ''

//const img = newImage();
////img.src = "https://random.dog/woof.json";
document.body.appendChild(img);

async function getQuote() {
    console.log('test click worked')
    let text = await fetch(endpoint);
    let response = await text.text();
    let json_response = JSON.parse(response);
    console.log(json_response['fact']);
    displayQuote(json_response['fact']);
}

async function getImage() {
    console.log('test click succesful!')
    let image = await fetch(imagepoint);
    let response = await image.image();
    let json_response = JSON.parse(response);
    console.log(json_response['']);
    displayImage(json_response['fact']);
}

var endpoint = "https://random.dog/woof.json";
let dataFetch = await fetch(endpoint);
let jsontext = await dataFetch.text();
if(dataFetch) {
    let quote = JSON.parse(jsontext);
    console.log(quote.message);
    displayQuote(quote.message);
} else {
    console.log("Error!");
    alaert("Error!");
}
}

async function displayQuote(x) {
    document.getElementById('js-quote-text').textContent = x;
}

//<img src="https://random.dog/woof.json" alt="Random dog picture"></img>