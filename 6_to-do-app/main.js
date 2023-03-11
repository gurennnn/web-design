//Node elements

const msg = document.getElementById('msg');
const input = document.getElementById('input');
const enter = document.getElementById('enter');
const clear = document.getElementById('clear-btn');
const container = document.getElementById('container');

//the tasks list

const tasks = [];

//defining functions

function showMsg(message, color, bgColor) {
    const msgDiv = msg.parentNode;
    msg.innerHTML = message;
    msg.style.color = color;
    msgDiv.style.backgroundColor = bgColor;
    msgDiv.style.visibility = 'visible'
    setTimeout(() => {msgDiv.style.visibility = 'hidden'}, 1000);
}

function showClearBtn() {
    if(tasks.length >= 1) {
        clear.style.visibility = 'visible';
    } else {
        clear.style.visibility = 'hidden';
    }
}

function addTask() {
    const text = input.value;
    if(text === '') {
        showMsg('Please enter some text !','rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 0.3');
    } else if(text.length > 20) {
        showMsg('Text is too long !','rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 0.3'); 
    } else {
        tasks.push(text);
        showMsg('Task added !', 'darkgreen', 'rgba(0, 255, 0, 0.4)');
    }
    input.value = '';
}

function deleteTask(index) {
    for(let i = 0; i < tasks.length; i++) {
        container.childNodes[3].remove();
    }
    tasks.splice(index, 1);
    showMsg('Value Removed !', 'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 0.3');
    displayTasks();
}

function displayTasks() {
    for(let i = 0; i < tasks.length; i++) {
        const clone = container.childNodes[1].cloneNode(true);
        const task = tasks[i];
        const text = document.createTextNode(task);
        clone.childNodes[1].appendChild(text);
        clone.childNodes[3].childNodes[1].addEventListener('click', () => {
            deleteTask(i);
        });
        clone.style.display = 'flex';
        if(i + 3 <= container.childNodes.length - 1) {
            container.replaceChild(clone, container.childNodes[i + 3]);
        } else {
            container.appendChild(clone);
        }
    }
    showClearBtn();
}

function clearAll() {
    for(let i = 0; i < tasks.length; i++) {
        container.childNodes[3].remove();
    }
    tasks.splice(0, tasks.length);
    showClearBtn();
    showMsg("Empty List !", 'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 0.3');
}

//attaching functions to DOM

enter.addEventListener('click', () => {
    addTask();
    displayTasks();
});

clear.addEventListener('click', () => {
    clearAll();
})