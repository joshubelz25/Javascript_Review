'use strict';

console.log("Hello World");

let randomNumber = 7; //let is locally scoped
var num = 4; //var is locally scoped
const number = 5; //globably scoped variable
let numb = 23;

console.log(num);
console.log(randomNumber);
console.log(number);

document.write('<h1>JavaScript Demo</h1>')

alert('WARNING!!! This is an alert message');
alert('Did you listen to the warning');

let name = prompt('Whats your name?');

console.log(name);

let mynumb = prompt('pick a number between 1 and 10');

if (mynumb < 5){
document.write('<h2>You Chose A Smaller Number</h2>')
}
else if(mynumb > 5){
document.write('<h2> You Chose A Large Number</h2>')
}
if(mynumb ==5){
document.write('<h2>You Chose 5</h2>')
}

//For Loops
//for(Statement 1; Statement 2; Statement 3;)
//Statement 1 is where you are starting your loop. Most of the time you are going to start at index 0. let i=0.
//Statement 2 is the condition you want to run through. i < 10.
//Statement 3 is how often you execute the command. i++.

for (let i=5; i<=5; i++){
    console.log(i*2);
}

const numb1 = prompt('pick a number')
const numb2 = prompt('pick another number')
Number(numb1);
Number(numb2);

function add(numb1, numb2){
    let int1 = parseInt(numb1)
    let int2 = parseInt(numb2)
    document.write('added to')
    document.write(int1 + int2)
}

add(numb1, numb2);