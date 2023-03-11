//getting the element responsible for our animation

const sideBar = document.getElementById('sidebar');

const menuBTN = document.getElementById('show');

const markBTN = document.getElementById('hide')

let change = true; //to know whether we have to hide the side bar or show it

//defining our showing and hiding function

function showBar() {
    let pos = -400;
    let animate = setInterval(frame, 5);
    function frame() {
        if(pos == 0) {
            clearInterval(animate);
        } else {
            pos += 10;
            sideBar.style.left = pos + 'px';
        }
    }
    change = false;
}
function hideBar() {
    let pos = 0;
    let animate = setInterval(frame, 5);
    function frame() {
        if(pos == -400) {
            clearInterval(animate);
        } else {
            pos -= 10;
            sideBar.style.left = pos + 'px';
        }
    }
    change = true;
}

//the animation function

function moveBar() {
    if(change) {
        showBar();
    } else {
        hideBar();
    }
}

//attaching the functions to their responsible buttons

menuBTN.addEventListener('click', moveBar);
markBTN.addEventListener('click', hideBar)