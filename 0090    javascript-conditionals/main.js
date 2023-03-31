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
  console.log('Value of isUnderFive(' + number + '): ', number < 5);
}

isUnderFive(4);
isUnderFive(10);
isUnderFive(5);

// isEven
function isEven(number) {
  console.log('Value of isEven(' + number + '): ', number % 2 === 0);
}

isEven(4);
isEven(10);
isEven(5);

// startsWithJ
function startsWithJ(string) {
  console.log('Value of startsWithJ(' + string + '): ', Array.from(string)[0] === 'J');
}

startsWithJ('Javascript');
startsWithJ('PHP');
startsWithJ('HTML');
startsWithJ('Java');
startsWithJ('Kotlin');
startsWithJ('C#');

// isOldEnoughToDrink
function isOldEnoughToDrink(person = {
  name: null,
  age: null
}) {
  console.log('Value of isOldEnoughDrink(' + person.age + '): ', person.age >= 21);
}

const person = {
  name: 'Young Kim',
  age: 40
};

isOldEnoughToDrink(person);

// isOldEnoughToDrive
function isOldEnoughToDrive(person = {
  name: null,
  age: null
}) {
  console.log('Value of isOldEnoughDrive(' + person.age + '): ', person.age >= 16);
}

const child = {
  name: 'Young Kim, Jr.',
  age: 12
};

isOldEnoughToDrive(child);

// isOldEnoughToDrinkAndDrive
function isOldEnoughToDrinkAndDrive(person = {
  name: null,
  age: null
}) {
  console.log('Value of isOldEnoughDriveAndDrink(' + person.age + '): ', false);
}

isOldEnoughToDrinkAndDrive(person);

// categorizeAcidity
function categorizeAcidity(pH) {
  if (pH === 7) {
    console.log('Value of categorizeAcidity(' + pH + '): ', 'neutral');
  } else if (pH >= 0 && pH < 7) {
    console.log('Value of categorizeAcidity(' + pH + '): ', 'acid');
  } else if (pH > 7 && pH <= 14) {
    console.log('Value of categorizeAcidity(' + pH + '): ', 'base');
  } else {
    console.log('Value of categorizeAcidity(' + pH + '): ', 'invalid pH level');
  }
}

categorizeAcidity(-1);
categorizeAcidity(14.0000001);
categorizeAcidity(7);
categorizeAcidity(2);
categorizeAcidity(9);

// introduceWarnerBro
function introduceWarnerBro(name) {
  switch (name) {
    case 'yakko':
      console.log('Value of introduceWarnerBro(' + name + '): ', 'We\'re the warner brothers!');
      break;
    case 'wakko':
      console.log('Value of introduceWarnerBro(' + name + '): ', 'We\'re the warner brothers!');
      break;
    case 'dot':
      console.log('Value of introduceWarnerBro(' + name + '): ', 'I\'m cute~');
      break;
    default:
      console.log('Value of introduceWarnerBro(' + name + '): ', 'Good night everybody!');
      break;
  }
}

introduceWarnerBro('yakko');
introduceWarnerBro('wakko');
introduceWarnerBro('dot');
introduceWarnerBro('cody');
introduceWarnerBro('minerva');

// recommedMovie
function recommendMovie(genre) {
  switch (genre) {
    case 'action':
      console.log('Value of recommendMovie(' + genre + '): ', 'Die Hard');
      break;
    case 'comedy':
      console.log('Value of recommendMovie(' + genre + '): ', 'Rush Hour');
      break;
    case 'horror':
      console.log('Value of recommendMovie(' + genre + '): ', 'Saw');
      break;
    case 'drama':
      console.log('Value of recommendMovie(' + genre + '): ', 'Ford V Ferrai');
      break;
    case 'musical':
      console.log('Value of recommendMovie(' + genre + '): ', 'Les Miserable');
      break;
    case 'sci-fi':
      console.log('Value of recommendMovie(' + genre + '): ', 'Star Wars');
      break;
    default:
      console.log('Value of recommendMovie(' + genre + '): ', 'Any movie you are into');
      break;
  }
}

recommendMovie('action');
recommendMovie('comedy');
recommendMovie('horror');
recommendMovie('drama');
recommendMovie('musical');
recommendMovie('sci-fi');
recommendMovie(null);
