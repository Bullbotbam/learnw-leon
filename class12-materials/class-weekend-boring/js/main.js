//addEventListener to grab value of #day, then compare value to days of week, tues&thur = class, sat&sun = weekend, else =boring

document.querySelector('#check').addEventListener('click', check);

function check() {
	const day = document.querySelector('#day').value.toLowerCase();

	//Conditionals go here

	if (day === 'tuesday' || day === 'thursday') {
		document.querySelector('#placeToSee').innerHTML = "It's Class Time Fool!";
		console.log('Class Fool');
	} else if (day === 'saturday' || day === 'sunday') {
		document.querySelector('#placeToSee').innerHTML = 'Weekend is here!';
		console.log('Weekend is here!');
	} else {
		document.querySelector('#placeToSee').innerHTML = 'Boooorrrring!';
	}
}
