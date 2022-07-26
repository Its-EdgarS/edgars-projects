/* 
  TODO: Write a function that sums two numbers
  TODO: Write a function that subtracts two numbers
  TODO: Write a function that divides two numbers.
  TODO: Write a function that multiplies two numbers.
  *NOTE* be sure to handle dividing by zero 😉
  ES5 Syntax: function Add(){}
  ES6 Syntax (Arrow function): const add = () => {}
*/

function add(){
  //Add function here
}

function sub(){
  //Subtract function here
}

const div = (a, b) => {
  if (b == 0) {
    console.log("You cannot divide by 0")
  } else {
    return a / b
  }
}

function mul(){
  //Multiply function here
}

console.log('hello from the SUM exercise')
/* 
  TODO: create a function that console logs the result of any of the above operations.
*/
console.log(div(6, 2))
console.log(div(6, 0))