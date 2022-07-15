//-------------
function hoisting() {
  console.log(a);
  console.log(foo());

  var a = 1; //This ONLY works with var
  console.log(a);
  a = 31;
  console.log(a);
  function foo() {
    return 10;
  }
}

hoisting();
//-------------

//-------------
(function scope() {
  let a = (b = 2);
});
//-------------

//-------------
function isPalindrome(string) {
  return string.split('').reverse().join('') === string;
}
console.log(isPalindrome('ama'));
console.log(isPalindrome('Reconocer'.toLowerCase()));
//-------------

let age = 19;

if (age >= 18) {
  console.log('Mayor de edad');
} else {
  console.log('eres menor de edad');
}

//Ternary operator
let adult = age >= 18 ? 'Mayor de edad' : 'Menor de edad';
console.log(adult);

var a = 1;
var b = 2;
console.log(a);

a = 3;
console.log(a);

let x = 10 % 4;
console.log(x);

//AUGMENTED MATH OPERATORS Works with + - / *

let m = 2;
let r = 69;
m += 3;
console.log(m);
r -= 29;
console.log(r);

//Double quotes

let str = 'I am a "double quote" in a "double quote"';
console.log(str);

//Escape sequences
/**
 * \' Single quote
 * \" Double quote
 * \\ Backslash
 * \n newline
 * \r carriage return
 * \t tab
 * \b backspace
 * \f form feed
 */

let name = 'Alan';
let myStr = 'Hello I am ' + name;
console.log(myStr);

console.log(myStr.length - 1);
console.log(name[name.length - 1]);

function wordBlanks(myNoun, myAdj, myVerb, myAdverb) {
  let result = '';
  result +=
    'The ' + myAdj + ' ' + myNoun + ' ' + myVerb + ' to the store ' + myAdverb;
  return result;
}

console.log(wordBlanks('dog', 'big', 'ran', 'quickly'));
console.log(wordBlanks('bird', 'tiny', 'flew', 'fast'));

//Bidimensional array
let biArr = [
  [1, 2],
  [3, 4],
];
console.log(biArr);
biArr = [
  [6, 8],
  [9, 10],
];
console.log(biArr);

let arr = ['Alan', 'Brett', 'Minerva', 'Ada'];
arr.push('Luis');
console.log(arr);
arr.pop();
console.log(arr);
arr.shift();
console.log(arr);
arr.unshift('Aly');
console.log(arr);

let myList = [['🥣'][3], ['🥛'][2], ['🥚'][3]];

function reusableFunction() {
  return console.log('Repeat this function');
}

reusableFunction();

function functionWithArguments(a, b) {
  console.log(a - b);
}
functionWithArguments(20, 5);

function sum(a, b) {
  oopsGlobal = 'Global variable';
  console.log(a + b);
}
sum(10, 10);

console.log(oopsGlobal);

function minusSeven(num) {
  return num - 7;
}
console.log(minusSeven(10));

//Assign with a returned value
function assigmentReturnValue(num) {
  return 10 * (num - 1);
}
newValue = assigmentReturnValue(6);
console.log(newValue);

// Learn JavaScript - Full Course for Beginners
// Minute 53:44

function nextInLine(arr, item) {
  arr.push(item);
  return arr.shift();
}

let testArr = [1, 2, 3, 4, 5];

console.log('Before: ' + JSON.stringify(testArr));
console.log(nextInLine(testArr, 1));
console.log('After: ' + JSON.stringify(testArr));

function testEqual(a, b) {
  if (a === b) {
    return 'Equal';
  }
  return 'Not Equal';
}
console.log(testEqual('12', 12));

function testNotEqual(a, b) {
  if (a != b) {
    return 'Not Equal';
  }
  return 'Equal';
}
console.log(testNotEqual(1, 12));

//Exercise
function checkSize(number) {
  if (number < 5) return 'Tiny';
  else if (number < 10) return 'Small';
  else if (number < 15) return 'Medium';
  else if (number < 20) return 'Large';
  else if (number >= 20) return 'Huge';
}

console.log(checkSize(15));

//Exercise 2

let golfNames = [
  'Hole in one',
  'Eagle',
  'Birdie',
  'Par',
  'Boogey',
  'Double Bogey',
  'Go home',
];

function golfScore(par, strokes) {
  if (strokes === 1) {
    return golfNames[0];
  } else if (strokes <= par - 2) {
    return golfNames[1];
  } else if (strokes === par - 1) {
    return golfNames[2];
  } else if (strokes === par) {
    return golfNames[3];
  } else if (strokes === par + 1) {
    return golfNames[4];
  } else if (strokes === par + 2) {
    return golfNames[5];
  } else if (strokes >= par + 3) {
    return golfNames[6] + ` (${strokes} strokes)`;
  }
}

console.log(golfScore(6, 8));

function isLess(a, b) {
  return a < b;
}
console.log(isLess(12, 13));

// Learn JavaScript - Full Course for Beginners
// Minute 53:44

let count = 0;

function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
      break;
  }

  let holdbet = 'Hold';
  if (count > 0) {
    holdbet = 'Bet';
  }

  return count + ' ' + holdbet;
}
cc(2);
cc('K');
cc(10);
cc('K');
cc('A');
console.log(cc(4));

let myDog = {
  name: 'Max',
  legs: 4,
  tails: 2,
  friends: [],
  'large sentence': 'placeholder',
};

let nameValue = myDog.name;
console.log(nameValue);
console.log(myDog['large sentence']);

myDog.name = 'Happy Max';
console.log(myDog.name);

myDog['bark'] = 'woof!';
console.log(myDog.bark);

delete myDog.bark;

//Objects for Lookups

function objectLoopUp(val) {
  let res = '';

  let lookup = {
    alpha: 'Adams',
    bravo: 'Boston',
    charlie: 'Chicago',
    delta: 'Denver',
    echo: 'Easy',
    foxtrot: 'frank',
  };

  result = lookup[val];
  return result;
}

console.log(objectLoopUp('alpha'));

let myMusic = [
  {
    artist: 'Billy Joel',
    title: 'Piano Man',
    release_year: 1973,
    formats: ['CD', '8T', 'LP'],
    gold: true,
  },
  {
    artist: 'PXNDX',
    title: 'Narcisista Por Excelencia',
    release_year: 2006,
    formats: ['CD', 'Youtube video'],
    gold: true,
  },
];

let formatContent = myMusic[1].formats[1];
console.log(formatContent);

//Adding a record collection

let collection = {
  2548: {
    album: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let it Rock', 'You Give Love a Bad Name'],
  },
  2468: {
    album: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette'],
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: [],
  },
  5439: {
    album: 'ABBA Gold',
  },
};

//Fancy way to make a copy of an Object
let collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
  if (value === '') {
    delete collection[id][prop];
  } else if (prop === 'tracks') {
    collection[id][prop] = collection[id][prop] || [];
    collection[id][prop].push(value);
  } else {
    collection[id][prop] = value;
  }

  return collection;
}
updateRecords(2468, 'tracks', 'test');
console.log(updateRecords(5439, 'artist', 'ABBA'));

//-------------
let whileArray = [];
let forArray = [];

let i = 0;
while (i < 11) {
  whileArray.push(i);
  i++;
}
console.log(whileArray);

//Count backwards with a for loop
for (let j = 20; j > 0; j -= 5) {
  forArray.push(j);
}
console.log(forArray);

let total = 0;
for (let i = 0; i < forArray.length; i++) {
  total += forArray[i];
}
console.log(total);

//Nesting loops - Adding Multidimensional arrays

function multiplyAll(arr) {
  let product = 1;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; i < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }

  return product;
}

let product = multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]);

console.log(product);
