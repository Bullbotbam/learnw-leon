//Create a stopwatch object that has four properties and three methods
let stopwatch = {};
stopwatch.color = 'black';
stopwatch.size = 'large';
stopwatch.year = 2021;
stopwatch.time = 2;

stopwatch.theme = function (color) {
	return console.log(`The theme is ${color}`);
};
stopwatch.backUP = function () {
	console.log('Back up Fool!');
};
stopwatch.start = function () {
	console.log('Starting');
};

console.log(stopwatch);
