const $boton = document.querySelector('#btn');

$boton.addEventListener('mouseover', () => {
    console.log('me presionaste')
});

const $inpText = document.querySelector('#text');

$inpText.addEventListener('keyup', (e) => {
    console.log(e.target.value)
});
