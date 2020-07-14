var _ = require('lodash');

var array = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(`Answer: ${_.without(array, 3)}`);
console.log('answer:', _.without(array, 3));

var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');
var button = document.querySelector('.random');

window.addEventListener('load', setGradient);

function setGradient() {
body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
	css.textContent = body.style.background + ";";
}

function setRandom() {
	return Math.floor(Math.random() * 256);

}

button.addEventListener('click', function() {
	var randomColor1 = `rgb(${setRandom()}, ${setRandom()}, ${setRandom()})`
	var randomColor2 = `rgb(${setRandom()}, ${setRandom()}, ${setRandom()})`
	body.style.background = `linear-gradient(to right, ${randomColor1}, ${randomColor2})`;
	css.textContent = body.style.background + ";"
})


color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);