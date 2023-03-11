//getting the paragraphs and the buttons
const parag1 = document.getElementById('history');
const parag2 = document.getElementById('vision');
const parag3 = document.getElementById('goals');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

//defining the functions 
const showHist = () => {
    parag1.style.display = 'block';
    parag2.style.display = 'none';
    parag3.style.display = 'none';
    btn1.style.backgroundColor = 'white';
    btn2.style.backgroundColor = 'rgba(215, 219, 230, 0.8)';
    btn3.style.backgroundColor = 'rgba(215, 219, 230, 0.8)'
};
const showVis = () => {
    parag1.style.display = 'none';
    parag2.style.display = 'block';
    parag3.style.display = 'none';
    btn1.style.backgroundColor = 'rgba(215, 219, 230, 0.8)';
    btn2.style.backgroundColor = 'white';
    btn3.style.backgroundColor = 'rgba(215, 219, 230, 0.8)'
}
const showGol = () => {
    parag1.style.display = 'none';
    parag2.style.display = 'none';
    parag3.style.display = 'block';
    btn1.style.backgroundColor = 'rgba(215, 219, 230, 0.8)';
    btn2.style.backgroundColor = 'rgba(215, 219, 230, 0.8)';
    btn3.style.backgroundColor = 'white'
}

//attaching the functions

btn1.addEventListener('click', showHist);
btn2.addEventListener('click', showVis);
btn3.addEventListener('click', showGol);