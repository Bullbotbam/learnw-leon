// Array Methods Notes

// push - Adds value to the end of array.
// unshift - Adds value to the start of array.
// pop - Removes a value from the end of array and returns it.
// shift - Removes a value from the start of array and returns it.
// splice - Removes value/values in the 2 given indexes and returns it.
// reverse - Reverses the array and returns it
// sort - Sorts the array alphabeticlly
// fill - Fills every element of the array with the given value.
// map - Perfoms a spesific action on all elements in a array and returns it.
// filter - Filters a array with a conditon and returns it.
// slice - Removes value/values in the 2 given indexes and returns it.
// concat - Combines 2 or more arrays and makes a new array and returns it
// flat - Converts a array of arrays into a single array and returns it
// flatMap - A combination of map and flat
// indexOf - Locates the index of given element and returns it
// find - filters array based on given value
// includes - Tells if given value output is true or false and returns it.
// some - Tells if given function output is true or false and returns it.
// every - Tells if given statement is true for all elements in the array
// join - joins a array on a given carecter and returns a string
// reduce - reduces the array in a single value and returns it
// forEach - Perfoms a spesific action on all elements in a array and returns it.
// toString - Converts array to string seprated by commas and returns it

// Array Methods

[1, 2, 3].push(4); // [1, 2, 3, 4]
[1, 2, 3].pop(); // [1, 2]
[1, 2, 3].shift(); // [2, 3]
[1, 2, 3].unshift(0); // [0, 1, 2, 3]
['a', 'b'].concat('c'); // ['a', 'b', 'c']
['a', 'b', 'c'].join('-'); // a-b-c
['a', 'b', 'c'].slice(1); // ['b', 'c']
['a', 'b', 'c'].indexOf('b'); // 1
['a', 'b', 'c'].includes('c'); // true
[3, 5, 6, 8].find((n) => n % 2 === 0); // 6
[2, 4, 3, 5].findIndex((n) => n % 2 !== 0); // 2
[3, 4, 8, 6].map((n) => n * 2); // [6, 8, 16, 12]
[1, 4, 7, 8].filter((n) => n % 2 === 0); // [4, 8]
[2, 4, 3, 7].reduce((acc, cur) => acc + cur); // 16
[2, 3, 4, 5].every((x) => x < 6); // true
[3, 5, 6, 8].some((n) => n > 6); // true
[1, 2, 3, 4].reverse(); // [4, 3, 2, 1]
[3, 5, 7, 8].at(-2); // 7

// More examples

let stuff = ['A', 'B', 'C', 'D', 'E', 'F']; // test array

// Useful array methods
stuff.pop(); // removes the last item in the array (returns what was removed)
//stuff = ['A', 'B', 'C', 'D', 'E']
//return: ['F']
stuff.shift(); // removes the first item in the array (returns what was removed)
//stuff = ['B', 'C', 'D', 'E', 'F']
//return: ['A']
stuff.push('G'); // adds an item to the end of the array (returns the new length of the array)
//stuff = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
//return: 7
stuff.unshift('Z'); // adds an item to the beginning of the array (returns the new length of the array)
//stuff = ['Z', 'A', 'B', 'C', 'D', 'E', 'F']
//return: 7
stuff.indexOf('C'); // returns the index number of the item in the array
//return: 2
stuff.splice(2); // gets rid of the index item and after it (returns what was removed)
//stuff = ['A', 'B']
//return: ['C', 'D', 'E', 'F']
stuff.splice(2, 2); // second argument determines how many items are removed in total (including index) (returns what was removed)
//stuff = ['A', 'B', 'E', 'F']
//return: ['C', 'D']
stuff.splice(2, 0, 'Hello'); // inserts item "hello" into index number 2 and shifts other items ahead (removing 0 items) (returns what was removed)
//stuff = ['A', 'B', 'Hello', 'C', 'D', 'E', 'F']
//return: []
stuff.splice(2, 3, 'Hello'); // removes 3 items (including index number 2 and after) and inserts "hello" into index number 2 (returns what was removed)
//stuff = ['A', 'B', 'Hello', 'F']
//return: ['C', 'D', 'E']
stuff.slice(2); // same as splice but doesn't modify the original array (returns what would be removed)
//stuff = ['A', 'B', 'C', 'D', 'E', 'F']
//return: ['C', 'D', 'E', 'F']
stuff.concat(['G', 'H', 'I']); // returns the combination of array "stuff" with the array argument
//return: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
stuff.toString(); // returns the combination of elements of the array into a string
//return: "A,B,C,D,E,F"
stuff.join('-'); // works the same as toString() but the argument determines what is between each element in the string
//return: "A-B-C-D-E-F"
stuff.reverse(); // reverses an array's elements (returns same thing)
//stuff = ['F', 'E', 'D', 'C', 'B', 'A']
stuff.includes('G'); // returns "true" if the item is located in the array and returns false if not
//return: false
stuff.at(-1); // returns the item corresponding to index, same as stuff[argument] if argument is positive but if it is negative it is the same as stuff[stuff.length + argument]
//return: 'F'

// Additional method examples
dogs.toString(); // convert to string: results "Bulldog,Beagle,Labrador"
dogs.join(' * '); // join: "Bulldog * Beagle * Labrador"
dogs.pop(); // remove last element
dogs.push('Chihuahua'); // add new element to the end
dogs[dogs.length] = 'Chihuahua'; // the same as push
dogs.shift(); // remove first element
dogs.unshift('Chihuahua'); // add new element to the beginning
delete dogs[0]; // change element to undefined (not recommended)
dogs.splice(2, 0, 'Pug', 'Boxer'); // add elements (where, how many to remove, element list)
var animals = dogs.concat(cats, birds); // join two arrays (dogs followed by cats and birds)
dogs.slice(1, 4); // elements from [1] to [4-1]
dogs.sort(); // sort string alphabetically
dogs.reverse(); // sort string in descending order
x.sort(function (a, b) {
	return a - b;
}); // numeric sort
x.sort(function (a, b) {
	return b - a;
}); // numeric descending sort
highest = x[0]; // first item in sorted array is the lowest (or highest) value
x.sort(function (a, b) {
	return 0.5 - Math.random();
}); // random order sort

let a1 = ['sam', 'john', 'ali', 'kahn'];
let b = [19, 23, 41, 61];
let p = 'var val';

//  #### arrays all type to declera

let a2 = [34, 'osama', 929, 'ali', 'kahn']; //1st to declar arry
let a = new Array(); //when you dont know how many is their

let mlutiarry = [
	['osama', 'khan', 'ali'], //array in array
	[12, 45, 34],
	['audit', 'val', 'naztown'],
];

//   #### arrays all type to declera

let r4 = Array.isArray(b); //check is arry or not
let c = a.includes('ali'); //check wether value is in arry or not (its case sensetive)

a.sort(); //sort all value
a.reverse(); //reverse all value

let st2 = a.toString(); //array into string
let st = a.join('-'); // same but without ,
let n2 = a.concat(b); //join two make one arry

a.pop(); //delete end val in array
a.shift(); //delete start val in arry

a.push('new'); // add new val to end
a.unshift('new'); //add new val to start

a[2] = 'ali new'; //add modify/update value frome array any where you want
delete a[0]; //delete value frome array any where you want but still undefine

let n4 = a.slice(1, 3); //slice new arry for exiting array;
a.splice(2, 0, 'osama'); //splice used to add new items to an array:

let i7 = a.indexOf('ali'); //give first indexof vale
let i = b.lastIndexOf(19); //gae last indexof vale

let res8 = b.some(function (age) {
	//if some is match retrun true
	return age >= 18;
});
let res7 = b.every(function (age) {
	//if every is macth return true
	return age >= 18;
});

let res6 = b.find(function (age) {
	//return first value
	return age >= 29;
});

let res = b.findIndex(function (age) {
	//return first value indexs
	return age >= 20;
});

let ar = [123, 12, 34];
let r5 = ar.map(function (x) {
	// return new array
	return x * 10;
});
document.write(res + '<br');

let s = 'this is an strig methods';
let s2 = 'yeh i use to it';
let s3 = 'this is end of it';

let r9 = s.length; //use to get length with space

let r11 = s.toUpperCase(); //upper all words
let r54 = s.toLowerCase(); //lower all words

let r2 = s.includes('an'); //return true if he find (casesensetive)
let r22 = s.startsWith('th'); // return true if he find fist-word (casesen..)
let r33 = s.endsWith('ds'); //retrun true if the find last-word (cseseen..)

let r55 = s.search('strig'); //return index if he find  (cases...)

let r222 = s.match(/is/g); //make new array with all same words

let r99 = s.indexOf('is'); //return index of first world only (casesen...)
let r76 = s.lastIndexOf('is'); //return index of last world only (casee...)

let r43 = s.replace('methods', 'function'); // replace the first value only

let r444 = s.trim(); // trim form left to right

let r3 = s.charAt(5); //retrun char on string
let rt1 = s.charCodeAt(5); //return unicode of char
let rr1 = String.fromCharCode(65); // put unicode and return char

let rt3 = s.concat(s2, s3); //join two string together

let ry1 = s.split(' '); //split string and make new array

let ru4 = s.repeat(3); //repeat same string as mush as you want

let rb3 = s.slice(3, 20); //return new string where ever you want
//  let r2w = s.substr(start,how many);
//  let r23 = s. substring(start,how many - 1);
document.write(r);

// this is an number methods######

let n = 9.4356775;

let q1 = Number(n); //convert string into number

let rd2 = parseInt(n); //convert decimal into int
let rd3 = parseFloat(n); //return with decimal num if he is

let rg5 = Number.isFinite(n); // return true int
let r5h = Number.isInteger(n); //return true only on int

let r6n = n.toFixed(2); // return int with decimal as many as you want
let rhs = n.toPrecision(4); // return int with decimal as many as you want +1 last decimal

// Math fundtion#########

let rns = Math.ceil(2.3); //up value 3 -2
let rkl = Math.floor(2.3); // down value 2 -3

let rsg = Math.round(3.5); //less then 5 is 3 up is 4 round
let re = Math.trunc(3.34); //convert into integer

let rh = Math.min(12, 423, 464, 3); //return min value 3
let rk = Math.max(12, 423, 464, 3); //return max value 464

let rku = Math.sqrt(25); //return (5)5
let rld = Math.cbrt(125); //return 5(5)(5)

let rqd = Math.pow(2, 4); //2*2*2*2=16

let r26 = Math.random(); //between 0 to 1

let r6475 = Math.abs(-19); //return absolut value
let r = Math.PI; //return 3.141592653589793
document.write(r);
