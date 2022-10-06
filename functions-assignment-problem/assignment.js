// function sayHello(names) {
//   console.log('Hi ' + names);
// }

// sayHello(names);

const getUserGreeting = prompt('How you want to be greeted', '');
const getUserInput = prompt('What is your name', '');

//task 1

const sayHello = (names) => {
    console.log('Hi ' + names)
};

sayHello(getUserInput);

// task 2

const sayHello2 = (phrase, names) => {
  console.log(phrase + ' ' + names);
};

sayHello2(getUserGreeting, getUserInput);

const sayHello3 = () => {
  const names = 'Damian';
  const phrase = 'Hi';
  console.log(phrase + ' ' + names);
};

sayHello3();

const sayHello4 = names => 'Hi ' + names;

console.log(sayHello4('damain'));

// task 3

const sayHello5 = (phrase = 'Hi ', names = 'Damian') => {
  console.log(phrase + '' + names);
};

sayHello5();

// task 4

function checkInput(cb, ...strings) {
  let hasEmptyTest = false;
  for(const text of strings) {
    if(!text) {
      hasEmptyTest = true;
      break;
    }
  }
  if (!hasEmptyTest) {
    cb();
  }
}

checkInput(
  () => {
    console.log('All not empty!');
  },
  'hello',
  '12',
  '',
);