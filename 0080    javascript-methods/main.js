// The math Object
const x = 10;
const y = 20;
const z = 30;

const maximumValue = Math.max(x, y, z);
console.log('Value of maximumValue: ', maximumValue);

const heroes = [
  'Ironman',
  'Superman',
  'Batman',
  'Onepunchman'
];

let randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;

const randomIndex = Math.floor(randomNumber);
console.log('Value of randomIndex: ', randomIndex);

const randomHero = heroes[randomIndex];
console.log('Value of randomHero: ', randomHero);

// Array Method
const library = [
  {
    title: 'Book_A',
    author: 'Author_A'
  },
  {
    title: 'Book_B',
    author: 'Author_B'
  },
  {
    title: 'Book_C',
    author: 'Author_c'
  }
];

const lastBook = library.pop();
console.log('Value of lastBook: ', lastBook);

const firstBook = library.shift();
console.log('Value of firstBook: ', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('Value of library: ', library);

// String Methods
const fullName = 'YoungJae KIM';

const firstAndLastName = fullName.split(' ');
console.log('Value of firstAndLastName: ', firstAndLastName);

const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('Value of sayMyName: ', sayMyName);
