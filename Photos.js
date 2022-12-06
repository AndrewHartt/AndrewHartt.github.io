const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const img = ['Floating_in_the_sky-1.jpg', 'DarkPool.jpeg', 'LightPool.jpeg', 'HawaiiForrest.jpeg', 'HawaiiStopSign2.jpeg',
'OrangeFlower.jpeg', 'OtherPurpleFlower.jpeg', 'OtherPurpleFlower_BlackAndWhite.jpeg', 'OtherPurpleFlower_Darkground.jpeg', 'OtherPurpleFlower_WhiteExposed.jpeg', 
'PinkFlower.jpeg', 'PinkFlower_Blackground.jpeg', 'PinkFlower_BlackAndWhite.jpeg', 'PinkFlower_Whiteground.jpeg', 'PurpleFlower.jpeg', 'PurpleFlower_Blackground.jpeg',
 'RedPlant.jpeg', 'Swaglos.jpeg', 'CaveOpening.jpeg'];
const alts = {
  'Floating_in_the_sky-1.jpg' : 'Image of My Friand Carlos Taking a Photo of a Valley In Hawaii with a photoshop of a floating shiloutte', 
  'DarkPool.jpeg' : 'Image of the Reflections of a Pool in Hawaii', 
  'LightPool.jpeg' : 'Image of the Reflections of a Pool in Hawaii with Flash On', 
  'HawaiiForrest.jpeg' : 'Image of Greenery and Large Stream in Hawaii', 
  'HawaiiStopSign2.jpeg' : 'Image of a Stop Sign in Kauai with Mountains in Background',
  'OrangeFlower.jpeg' : 'Image of a Orange Flower in Hawaii', 
  'OtherPurpleFlower.jpeg' : 'Image of a Purple Flower in Hawaii', 
  'OtherPurpleFlower_BlackAndWhite.jpeg' : 'Image of the Purple Flower in Hawaii in Black & White', 
  'OtherPurpleFlower_Darkground.jpeg' : 'Image of the Purple Flower in Hawaii With a Dark Background', 
  'OtherPurpleFlower_WhiteExposed.jpeg' : 'Image of the Purple Flower in Hawaii Extra Exposure', 
  'PinkFlower.jpeg' : 'Image of a Pink Flower in Hawaii', 
  'PinkFlower_Blackground.jpeg' : 'Image of the Pink Flower in Hawaii With Dark Background', 
  'PinkFlower_BlackAndWhite.jpeg' : 'Image of the Pink Flower in Hawaii in Black & White', 
  'PinkFlower_Whiteground.jpeg' : 'Image of the Pink Flower in Hawaii with a Light Background', 
  'PurpleFlower.jpeg' : 'Image of a Purple Flower in Hawaii', 
  'PurpleFlower_Blackground.jpeg' : 'Image of the Purple Flowre in Hawaii with Dark Background',
  'RedPlant.jpeg' : 'Image of a Red Plant in Hawaii', 
  'Swaglos.jpeg' : 'A Picture of my Friend Carlos in Hawaii', 
  'CaveOpening.jpeg' : 'A Picture of a Cave Opening on the Coast of Kauai'
}




/* Looping through images */

for (const image of img) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `img/${image}`);
  newImage.setAttribute('alt', alts[image]);
  thumbBar.appendChild(newImage);
  newImage.addEventListener('click', a => {
    displayedImage.src = a.target.src;
    displayedImage.alt = a.target.alt;
  });
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {
  const btnClass = btn.getAttribute('class');
  if (btnClass === 'dark') {
    btn.setAttribute('class','light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class','dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});