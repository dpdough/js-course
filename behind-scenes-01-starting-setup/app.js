function getName() {
    return prompt('Please eneter your name: ', '');
}

function greet() {
    const userName = getName();
    console.log('Hello ' + userName);
}

greet();  //runs in the stack memory, stack gets populated when new functions get called and function is removed from teh stack after execution

