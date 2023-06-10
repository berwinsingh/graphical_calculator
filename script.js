const numbers = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operation");
const displayVal = document.querySelector("h2");
const screen = document.getElementById("math-operation");
const clear = document.getElementById("reset");
let num1 = [];

const methods = {
        "add": (a,b)=>a+b,
        "subtract": (a,b)=> a-b,
        "multiply": (a,b)=>a*b,
        "divide": (a,b)=>a/b,
        "remainder": (a,b)=>a%b
    }; //An object that stores arrow functions for all mathematical operations, we will call this object to run operations

//Extracting the number value from the element and displaying it inside the input
for (let i=0; i<numbers.length; i++){
    numbers[i].addEventListener("click", () => {
        num1.push(numbers[i].textContent); //Storing the multiple values inside of an array
        console.log(num1);
    });
};

//Figuring out the operator that the user wants to perform and storing inside of a variable
for (let j=0;j<operator,length;j++){

};

//Resetting Values back to 0 with AC button
clear.addEventListener("click", () =>{
    screen.value = "";
    num1 = []; //Resetting the empty array val
});