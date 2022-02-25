//Write your pseduo code first!

/*
identify what the temperature is then use a function to convert it then show the value
*/
document.querySelector('#check').addEventListener('click', convert);
const temperature = 0;

function convert() {
	console.log('test');

	// get value
	let temp = document.querySelector('firstName').value;
	// convert the value
	temp = (temp * 9) / 5 + 32;
	// show the value to user
	document.querySelector('#placeToSee').innerText;

	console.log('Deez');
}
