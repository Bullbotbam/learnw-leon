// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value

let myFood = 'sandwhich';
myFood = 'pizza';
alert(myFood);

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let talkWeb = 'This is what we about out here.';
alert(talkWeb[1]);
// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.

function threeNumbers(num1, num2, num3) {
	let jim = (num1 / num2) * num3;
	alert(jim);
}
threeNumbers(20, 5, 3);

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.

function cubeRootIt(robot) {
	console.log(Math.cbrt(robot).toFixed(4));
}
cubeRootIt(27);
// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"

function checkForSummer(month) {
	let monthLowerCase = month.toLowerCase();
	if (
		monthLowerCase === 'june' ||
		monthLowerCase === 'july' ||
		monthLowerCase === 'august'
	) {
	}
}

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
