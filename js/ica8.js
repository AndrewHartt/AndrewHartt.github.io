


const selectElement = document.querySelector('.Pizza');

selectElement.addEventListener('change', (event) => {
  const result = document.querySelector('.result');
  result.textContent = `You like ${event.target.value}`;
});

const btn = document.getElementById('button');


btn.addEventListener('click', function handleClick() {
  const initialText = 'Click me if you DARE!';

  btn.innerHTML = `<span style="background-color: #B4D9F3">You caused a distant star to supernova, those alien lives are on you<span>`;
});
