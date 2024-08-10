
const myh1 = document.getElementById('heading')
const button = document.getElementById('modeSwitcher');

function switchMode() {

    if (document.body.style.backgroundColor === 'black') {
        document.body.style.backgroundColor = 'white';
        myh1.style.color = 'black'
    } else {
        document.body.style.backgroundColor = 'black';
        myh1.style.color = 'white'
    }
}

button.addEventListener('click', switchMode);
