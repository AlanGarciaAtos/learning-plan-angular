// const jokes = require('./jokes'); //common js
import { jokes } from './jokes'; //E2015
import $ from 'jquery';
import fs from 'fs';

//* Vanilla js
// jokes.getOne().then((joke) => {
//   document.getElementById('joke').innerHTML = joke;
// });

//*With Jquery
jokes.getOne().then((joke) => {
  $('#joke').text(joke);
});

const copy = fs.readFileSync(__dirname + '/copyright.txt', 'utf8');

$('#copy').text(copy);
