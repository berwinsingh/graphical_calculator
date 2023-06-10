const numbers = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operation");
const h2 = document.querySelector("h2");
const screen = document.getElementById("math-operation");
const clear = document.getElementById("reset");
const equal = document.getElementById("equal");

let completeVal = "";
let num1 = [];
let num2 = [];
let sign = "";

//An object that stores arrow functions for all mathematical operations, we will call this object to run operations
const methods = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
  remainder: (a, b) => a % b,
};

//Extracting the number 1 value from the element and displaying it inside the input
for (let i = 0; i < numbers.length; i++) {
    if(sign===""){    
        numbers[i].addEventListener("click", () => {
          num1.push(numbers[i].textContent); //Storing the multiple values inside of an array
          const joinedValue = num1.join(""); //Creating a new variable that joins the array and stores the value
          completeVal = joinedValue;
          screen.value = completeVal;
        });
    }
}

//Figuring out the operator that the user wants to perform and storing inside of a variable
for (let j = 0; j < operator.length; j++) { 
  operator[j].addEventListener("click", () => {
    if(sign===""){
        const op = operator[j].getAttribute("id");
        sign = op;
        completeVal += " " + operator[j].textContent;
    }
    screen.value = completeVal;
  });
}


//Extracting Number 2 value
for (let z=0; z<numbers.length; z++){
    if(sign!=""){    
        numbers[z].addEventListener("click", () => {
          num2.push(numbers[z].textContent); //Storing the multiple values inside of an array
          const joinedValue2 = num1.join(""); //Creating a new variable that joins the array and stores the value
          completeVal += joinedValue2;
          screen.value = completeVal;
        });
    }
}

//Adding Equal sign button functionality
equal.addEventListener("click",()=>{

});

//Resetting Values back to 0 with AC button
clear.addEventListener("click", () => {
  screen.value = "";
  num1 = []; //Resetting the num1 & num2 array values
  num2 = [];
  completeVal = "";
  sign="";
});

//Adding Backspace functionality
