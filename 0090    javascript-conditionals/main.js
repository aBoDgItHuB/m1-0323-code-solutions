/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */
// isUnderFive
function isUnderFive(number) {
  const isUnderFive = number < 5;
  return isUnderFive;
}

console.log('Value of isUnderFive(4)', isUnderFive(4));
console.log('Value of isUnderFive(10)', isUnderFive(10));
console.log('Value of isUnderFive(5)', isUnderFive(5));

// isEven
function isEven(number) {
  const isEven = number % 2 === 0;
  return isEven;
}

console.log('Value of isEven(4)', isEven(4));
console.log('Value of isEven(10)', isEven(10));
console.log('Value of isEven(5)', isEven(5));

// startsWithJ
function startsWithJ(string) {
  const startsWithJ = Array.from(string)[0] === 'J';
  return startsWithJ;
}

console.log('Value of startsWithJ(\'Javascript\')', startsWithJ('Javascript'));
console.log('Value of startsWithJ(\'PHP\')', startsWithJ('PHP'));
console.log('Value of startsWithJ(\'HTML\');', startsWithJ('HTML'));
console.log('Value of startsWithJ(\'Java\')', startsWithJ('Java'));
console.log('Value of startsWithJ(\'Kotlin\')', startsWithJ('Kotlin'));
console.log('Value of startsWithJ(\'C#\')', startsWithJ('C#'));

// isOldEnoughToDrink
function isOldEnoughToDrink(person = {
  name: null,
  age: null
}) {
  const isOldEnoughToDrink = person.age >= 21;
  return isOldEnoughToDrink;
}

const person = {
  name: 'Young Kim',
  age: 40
};

console.log('Value of isOldEnoughToDrink(person)', isOldEnoughToDrink(person));

// isOldEnoughToDrive
function isOldEnoughToDrive(person = {
  name: null,
  age: null
}) {
  const isOldEnoughToDrive = person.age >= 16;
  return isOldEnoughToDrive;
}

const child = {
  name: 'Young Kim, Jr.',
  age: 12
};

console.log('Value of isOldEnoughToDrive(child)', isOldEnoughToDrive(child));

// isOldEnoughToDrinkAndDrive
function isOldEnoughToDrinkAndDrive(person = {
  name: null,
  age: null
}) {
  const isOldEnoughToDrinkAndDrive = false; // force to be false.
  return isOldEnoughToDrinkAndDrive;
}

console.log('Value of isOldEnoughToDrinkAndDrive(person)', isOldEnoughToDrinkAndDrive(person));

// categorizeAcidity
function categorizeAcidity(pH) {
  let categorizeAcidity;

  if (pH === 7) {
    categorizeAcidity = 'neutral';
  } else if (pH >= 0 && pH < 7) {
    categorizeAcidity = 'acid';
  } else if (pH > 7 && pH <= 14) {
    categorizeAcidity = 'base';
  } else {
    categorizeAcidity = 'invalid pH level';
  }

  return categorizeAcidity;
}

console.log('Value of categorizeAcidity(-1)', categorizeAcidity(-1));
console.log('Value of categorizeAcidity(14.0000001)', categorizeAcidity(14.0000001));
console.log('Value of categorizeAcidity(7)', categorizeAcidity(7));
console.log('Value of categorizeAcidity(2)', categorizeAcidity(2));
console.log('Value of categorizeAcidity(9)', categorizeAcidity(9));

// introduceWarnerBro
function introduceWarnerBro(name) {
  let introduceWarnerBro;

  switch (name) {
    case 'yakko':
      introduceWarnerBro = 'We\'re the warner brothers!';
      break;
    case 'wakko':
      introduceWarnerBro = 'We\'re the warner brothers!';
      break;
    case 'dot':
      introduceWarnerBro = 'I\'m cute~';
      break;
    default:
      introduceWarnerBro = 'Good night everybody!';
      break;
  }

  return introduceWarnerBro;
}

console.log('Value of introduceWarnerBro(\'yakko\')', introduceWarnerBro('yakko'));
console.log('Value of introduceWarnerBro(\'wakko\')', introduceWarnerBro('wakko'));
console.log('Value of introduceWarnerBro(\'dot\')', introduceWarnerBro('dot'));
console.log('Value of introduceWarnerBro(\'cody\')', introduceWarnerBro('cody'));
console.log('Value of introduceWarnerBro(\'minerva\')', introduceWarnerBro('minerva'));

// recommedMovie
function recommendMovie(genre) {
  let recommendMovie;

  switch (genre) {
    case 'action':
      recommendMovie = 'Die Hard';
      break;
    case 'comedy':
      recommendMovie = 'Rush Hour';
      break;
    case 'horror':
      recommendMovie = 'Saw';
      break;
    case 'drama':
      recommendMovie = 'Ford V Ferrai';
      break;
    case 'musical':
      recommendMovie = 'Les Miserable';
      break;
    case 'sci-fi':
      recommendMovie = 'Star Wars';
      break;
    default:
      recommendMovie = 'Any movie you are into';
      break;
  }

  return recommendMovie;
}

console.log('Value of recommendMovie(\'action\')', recommendMovie('action'));
console.log('Value of recommendMovie(\'comedy\')', recommendMovie('comedy'));
console.log('Value of recommendMovie(\'horror\')', recommendMovie('horror'));
console.log('Value of recommendMovie(\'drama\')', recommendMovie('drama'));
console.log('Value of recommendMovie(\'musical\')', recommendMovie('musical'));
console.log('Value of recommendMovie(\'sci - fi\')', recommendMovie('sci-fi'));
console.log('Value of recommendMovie(null)', recommendMovie(null));
