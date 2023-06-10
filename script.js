const numbers = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operation");
const displayVal = document.querySelector("h2");
const screen = document.getElementById("math-operation");
const clear = document.getElementById("reset");
let num1 = [];
let num2 = [];

//An object that stores arrow functions for all mathematical operations, we will call this object to run operations
const methods = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
  remainder: (a, b) => a % b,
};

//Extracting the number value from the element and displaying it inside the input
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", () => {
    num1.push(numbers[i].textContent); //Storing the multiple values inside of an array
    const joinedValue = num1.join(""); //Creating a new variable that stores the joined value
    screen.value = joinedValue;
    // console.log(joinedValue);
  });
}

//Figuring out the operator that the user wants to perform and storing inside of a variable
for (let j = 0; j < operator.length; j++) {
  operator[j].addEventListener("click", () => {
    let op = operator[j].getAttribute("id");
    // console.log(op);
    screen.value = operator[j].textContent;
  });
}

//Resetting Values back to 0 with AC button
clear.addEventListener("click", () => {
  screen.value = "";
  num1 = []; //Resetting the num1 & num2 array values
  num2 = [];
});

//Adding Backspace functionality
