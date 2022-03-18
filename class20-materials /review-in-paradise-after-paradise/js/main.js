// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".

let nums = [50, 10, 20, 30, 40, 50];

let fisrtNum = nums[0];
let lastNum = nums[nums.length - 1];

function arrNums(arr) {
	if (fisrtNum < lastNum) {
		alert('Hi');
	} else if (fisrtNum > lastNum) {
		alert('Bye');
	} else {
		alert('We close in an hour');
	}
}
arrNums();
