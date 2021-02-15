const switchCheck = document.getElementById('switch');
const body = document.body;
const title = body.getElementsByClassName('title');
const numbers = document.getElementsByClassName('number');
const mainBox = document.getElementsByClassName('main-box');
const overviewBox = document.getElementsByClassName('overview-box');
const backgTop = document.getElementById('background-top');
const backg = document.getElementById('background');
const textSpan = document.getElementsByTagName('span');
const viewsLikes = document.getElementsByClassName('names-likes-views');

function changeColor() {
    if (switchCheck.checked === true) {
        body.style.backgroundColor = 'hsl(0, 0%, 100%)';
        backgTop.style.backgroundColor = 'hsl(225, 100%, 98%)';
        backg.style.backgroundColor = 'hsl(0, 0%, 100%)';
        for (i = 0; i < title.length; i++) {
            title[i].style.color = 'hsl(230, 17%, 14%)';
        }
        for (i = 0; i < numbers.length; i++) {
            numbers[i].style.color = 'hsl(230, 17%, 14%)';
        }
        for (i = 0; i < mainBox.length; i++) {
            mainBox[i].style.background = 'hsl(227, 47%, 96%)';
        }
        for (i = 0; i < overviewBox.length; i++) {
            overviewBox[i].style.background = 'hsl(227, 47%, 96%)';
        }
        for (i = 0; i < textSpan.length; i++) {
            textSpan[i].style.color = 'hsl(228, 12%, 44%)';
        }
        for (i = 0; i < viewsLikes.length; i++) {
            viewsLikes[i].style.color = 'hsl(228, 12%, 44%)';
        }
    }
}

function restoreColors() {
    if (switchCheck.checked === false) {
        body.style.backgroundColor = 'hsl(230, 17%, 14%)';
        backgTop.style.backgroundColor = 'hsl(232, 19%, 15%)';
        backg.style.backgroundColor = 'hsl(230, 17%, 14%)';
        for (i = 0; i < title.length; i++) {
            title[i].style.color = 'hsl(0, 0%, 100%)';
        }
        for (i = 0; i < numbers.length; i++) {
            numbers[i].style.color = 'hsl(0, 0%, 100%)';
        }
        for (i = 0; i < mainBox.length; i++) {
            mainBox[i].style.background = 'hsl(228, 28%, 20%)';
        }
        for (i = 0; i < overviewBox.length; i++) {
            overviewBox[i].style.background = 'hsl(228, 28%, 20%)';
        }
        for (i = 0; i < textSpan.length; i++) {
            textSpan[i].style.color = 'hsl(228, 34%, 66%)';
        }
        for (i = 0; i < viewsLikes.length; i++) {
            viewsLikes[i].style.color = 'hsl(228, 34%, 66%)';
        }
    }
}
switchCheck.addEventListener('change', () => {
    changeColor();
    restoreColors();
})
