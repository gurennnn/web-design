//getting the elements

const alls = document.getElementsByClassName('all');
const breakfasts = document.getElementsByClassName('breakfast');
const lunchs = document.getElementsByClassName('lunch');
const shakes = document.getElementsByClassName('shakes');
const dinners = document.getElementsByClassName('dinner');

//defining the functions

const showAll = () => {
    for(let i = 0; i < alls.length; i++) {
        alls[i].style.display = 'block';
    }
};

const showBr = () => {
    for(let i = 0; i < breakfasts.length; i++) {
        breakfasts[i].style.display = 'block';
    }
    for(let i = 0; i < lunchs.length; i++) {
        lunchs[i].style.display = 'none';
    }
    for(let i = 0; i < shakes.length; i++) {
        shakes[i].style.display = 'none';
    }
    for(let i = 0; i < dinners.length; i++) {
        dinners[i].style.display = 'none';
    }
}

const showLn = () => {
    for(let i = 0; i < breakfasts.length; i++) {
        breakfasts[i].style.display = 'none';
    }
    for(let i = 0; i < lunchs.length; i++) {
        lunchs[i].style.display = 'block';
    }
    for(let i = 0; i < shakes.length; i++) {
        shakes[i].style.display = 'none';
    }
    for(let i = 0; i < dinners.length; i++) {
        dinners[i].style.display = 'none';
    }
}

const showSh = () => {
    for(let i = 0; i < breakfasts.length; i++) {
        breakfasts[i].style.display = 'none';
    }
    for(let i = 0; i < lunchs.length; i++) {
        lunchs[i].style.display = 'none';
    }
    for(let i = 0; i < shakes.length; i++) {
        shakes[i].style.display = 'block';
    }
    for(let i = 0; i < dinners.length; i++) {
        dinners[i].style.display = 'none';
    }
}

const showDn = () => {
    for(let i = 0; i < breakfasts.length; i++) {
        breakfasts[i].style.display = 'none';
    }
    for(let i = 0; i < lunchs.length; i++) {
        lunchs[i].style.display = 'none';
    }
    for(let i = 0; i < shakes.length; i++) {
        shakes[i].style.display = 'none';
    }
    for(let i = 0; i < dinners.length; i++) {
        dinners[i].style.display = 'block';
    }
}

//attaching the functions to the top bar

const btnAll = document.getElementById('all');
const btnBr = document.getElementById('breakfast');
const btnLn = document.getElementById('lunch');
const btnSh = document.getElementById('shakes');
const btnDn = document.getElementById('dinner');

btnAll.addEventListener('click', showAll);
btnBr.addEventListener('click', showBr);
btnLn.addEventListener('click', showLn);
btnSh.addEventListener('click', showSh);
btnDn.addEventListener('click', showDn);