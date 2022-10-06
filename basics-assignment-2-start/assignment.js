const task3Element = document.getElementById('task-3');
let name1 = 'Damian';
let string1 = 'Coding';
let string2 = 'is';
let string3 = 'fun';
function emptyFunction() {
    alert('Hello!');
}
function nameFunction(name1) {
    alert(name1);
}

nameFunction(name1);
emptyFunction();
task3Element.addEventListener('click', emptyFunction);
function newString(string1, string2, string3) {
    concatenatedString = string1 + ' ' + string2  + ' ' + string3;
    alert(concatenatedString);
}
newString(string1, string2, string3);