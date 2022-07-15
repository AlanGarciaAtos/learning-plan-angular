let arr = [];
let i = 10;

do {
  arr.push(i);
  i++;
} while (i < 5);

console.log(i, arr);

let contacts = [
  {
    firstName: 'Lmao',
    lastName: 'Laine',
    number: '2321412',
    likes: ['Park', 'Coding', 'Brownie'],
  },
  {
    firstName: 'Alan',
    lastName: 'Torres',
    number: '896436',
    likes: ['Pizza', 'Rayito', 'Genshin'],
  },
  {
    firstName: 'Sherlock',
    lastName: 'Holmes',
    number: '74212',
    likes: ['Guns', 'Mystery', 'Water'],
  },
  {
    firstName: 'Kristian',
    lastName: 'Vos',
    number: 'Unknown',
    likes: ['Javascript', 'Gaming', 'Sushi'],
  },
];

function lookUpProfile(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].lastName === name) {
      return contacts[i][prop] || 'No such property';
    }
  }
  return 'No such contact';
}

let data = lookUpProfile('Holmes', 'number');
console.log(data);

//Using Math and random numbers
function randomFraction() {
  return Math.random();
}
console.log(randomFraction());

let rngBetween0And19 = Math.floor(Math.random() * 20);
//Line 55 is the same as 57
function rngWholeNumber() {
  return Math.floor(Math.random() * 10);
}
console.log(rngWholeNumber());

function rngRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let rngNumber = rngRange(5, 28);
console.log(rngNumber);

//CONVERT DATA
function convertToString(str) {
  return parseInt(str);
}
console.log(convertToString(34));

//Binary to numbers
function convertInteger(str) {
  return parseInt(str, 2);
}
console.log(convertInteger('10011'));

//TERNARY OPERATOR
function checkEqual(a, b) {
  return a === b ? true : false;
}
checkEqual(1, 2);

function checkSign(num) {
  return num > 0 ? 'positive' : num < 0 ? 'negative' : 'zero';
  // if (num > 0) {
  //   return "positive"
  // } else if(num < 0) {
  //   return "negative"
  // }else{
  //   return "zero"
  // }
}
console.log(checkSign(-1));

//Mutated an array with const
const s = [5, 7, 2];

function editPlace() {
  'use strict';
  //s = [2, 5, 7];
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
}
editPlace();
console.log(s);

//Prevent Object Mutation
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14,
  };

  Object.freeze(MATH_CONSTANTS);
  try {
    MATH_CONSTANTS.PI = 99;
  } catch (err) {
    console.log(err);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
console.log(PI);

//Arrow functions
let magic = () => new Date();
console.log(magic);

let sumArrowFunction = (a, b) => a + b;
console.log(sumArrowFunction(2, 3));

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

//Using arrow functions inside arrow functions
const squareList = (arr) => {
  const squareIntegers = arr
    .filter((num) => Number.isInteger(num) && num > 0)
    .map((x) => x * x);

  return squareIntegers;
};
const squareIntegers = squareList(realNumberArray);
console.log(squareIntegers);

const increment = function () {
  return function increment(number, value = 1) {
    return number + value;
  };
};

const sum = (function () {
  return function sum(...args) {
    // const args = [x, y, z];
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3));

//DESTRUCTURING
const arr1 = ['Jan', 'Feb', 'March', 'April', 'May'];
let arr2;

(function () {
  arr2 = [...arr1];
  arr1[0] = 'potato';
})();
console.log(arr1);
console.log(arr2);

const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 74.3, max: 89.4 },
};

function getMaxOfTomorrow(forecast) {
  const {
    tomorrow: { max: maxOfTomorrow },
  } = forecast;
  return maxOfTomorrow;
}
console.log(getMaxOfTomorrow(LOCAL_FORECAST));

const [z, x, , y] = [1, 2, 3, 4, 5, 6];
console.log(z, x, y);

let a = 8,
  b = 6;

() => {
  [a, b] = [b, a];
};

console.log(a);
console.log(b);

//Destructuring assigment with a rest operator
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
  const [, , ...arr] = list;
  return arr;
}

const array = removeFirstTwo(source);

console.log(array);
console.log(source);

const stats = {
  max_Hp: 56.78,
  attack: 20,
  luck: 1,
  speed: 7,
  min_Hp: 10.32,
};

const half = (function () {
  return function half({ max_Hp, min_Hp }) {
    return (max_Hp + min_Hp) / 2.0;
  };
})();

console.log(stats);
console.log(half(stats));

const gre = `fjdfjdkjfkdsf, ${stats.attack}`;
console.log(gre);

//CODE CHALLENGE - TEMPLATE LITERALS
const result = {
  success: ['max-length', 'no-amd', 'prefer-arrow-functions'],
  failure: ['no-var', 'var-on-top', 'line-break'],
  skipped: ['id-blacklist', 'no-dup-keys'],
};

function makeList(arr) {
  const resultDisplayArray = [];

  for (let i = 0; i < arr.length; i++) {
    resultDisplayArray.push(`<li class="text-warning">${arr[i]}</i>`);
  }
  return resultDisplayArray;
}

const resultDisplayArray = makeList(result.failure);
console.log(resultDisplayArray);

//Simple fields
const createPersonOld = (name, age, gender) => {
  // return {
  //   name: name,
  //   age: age,
  //   gender: gender,
  // };
};

const createPersonNew = (name, age, gender) => ({ name, age, gender });
console.log(createPersonNew('Alan', '21', 'Male'));

let myCar = {
  brand: 'Toyota',
  color: 'red',
  year: 2020,
  detailsOfCar(brand, color, year) {
    this.brand = brand;
    this.color = color;
    this.year = year;
  },
};

myCar.detailsOfCar('Tesla', 'red', 2019);
console.log(myCar);

//CLASSES IN JS
function makeClass() {
  class Vegetable {
    constructor(name) {
      this.name = name;
    }
  }
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('Carrot🥕');

console.log(carrot);

class Movie {
  constructor(name, date, rating) {
    this.name = name;
    this.date = date;
    this.rating = rating;
  }
}
const movie = new Movie('Camino hacia el dorado', 2000, 'PG13');
console.log(movie);

class Thermostat {
  constructor(temp) {
    //_ means is private variable, not have access outside the scope
    this._temp = (5 / 9) * (temp - 32);
  }
  get temperature() {
    return this._temp;
  }
  set temperature(updatedTemp) {
    this._temp = updatedTemp;
  }
}

const thermos = new Thermostat(78);
thermos.temperature = 26;
let temp = thermos.temperature;
temp = thermos.temperature;

console.log(temp);

/**
 * Export
 * Export default
 * Import
 *
 */
