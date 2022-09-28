function getName() {
    return prompt('Please eneter your name: ', '');
}

function greet() {
    const userName = getName();
    console.log('Hello ' + userName);
}

greet();