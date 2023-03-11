//setting colors for each type

const simples = ["blueviolet", "gold", "crimson", "red", "yellow", "pink", "cyan", "beige", "brown", "green"];
const hexs = ["#BBFFF9", "#AD8B73", "#FF1818", "#42C2FF", "#533E85", "#5463FF", "#D82148", "#FFB72B", "#5902EC", "#084594"];
const rgbs = ["rgb(104, 112, 191)", "rgb(67, 160, 86)", "rgb(240, 111, 111)", "rgb(139, 0, 0)", "rgb(250, 128, 114)", "rgb(255, 69, 0)", "rgb(255, 140, 0)", "rgb(127, 255, 0)", "rgb(0, 255, 127)", "rgb(128, 0, 128)"];
const hsls = ["hsl(300, 85%, 85%)", "hsl(180, 95%, 55%)", "hsl(116, 50%, 50%)", "hsl(49, 100%, 50%)", "hsl(105, 97%, 23%)", "hsl(1, 87%, 50%)", "hsl(323, 71%, 39%)", "hsl(190, 32%, 49%)", "hsl(279, 87%, 36%)", "hsl(136, 100%, 42%)"];

//the list we are to work with

let colorList = simples;

function changeS() {
    colorList = simples;
}
function changeHEX() {
    colorList = hexs;
}
function changeRGB() {
    colorList = rgbs;
}
function changeHSL() {
    colorList = hsls;
}

//changing the color

function changeColor() {
    const colorElem = document.querySelector(":root");
    const textElem = document.getElementById("demo");
    const index = Math.floor(Math.random() * 10);
    colorElem.style.setProperty('--color', colorList[index]);
    textElem.innerHTML = colorList[index];
}