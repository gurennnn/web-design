//Initalizing the counter element

const elem = document.getElementById('demo');
const btn1 = document.getElementById('decrease');
const btn2 = document.getElementById('reset');
const btn3 = document.getElementById('increase');

elem.innerHTML = 0;

//defining the counting functions

function reset() {
    elem.innerHTML = 0;
}
function increase() {
    elem.innerHTML = parseInt(elem.innerHTML) + 1;
}
function decrease() {
    elem.innerHTML -= 1;
}

//defining the color changinfg function

function pos() {
    if(parseInt(elem.innerHTML) > 0) {
        elem.style.color = "green";
    }
    else if(parseInt(elem.innerHTML) < 0) {
        elem.style.color = "red";
    }
    else {
        elem.style.color = "rgb(20, 20, 58)";
    }
}

//attaching the function to our buttons

btn1.addEventListener("click", pos);
btn2.addEventListener("click", pos);
btn3.addEventListener("click", pos);