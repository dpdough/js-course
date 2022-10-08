const h1 = document.getElementById('main-title');

h1.textContent = 'New content';
h1.style.color = 'red';
h1.style.backgroundColor = 'blue';

//const listItemElements = document.querySelectorAll('li');
const listItemElements = document.queryElementsByTagName('li');

for (const listItemEl of listItemElements) {
    console.dir(listItemEl);
}