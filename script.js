const numbers = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operation");
const h6 = document.querySelector("h6");
const backspace = document.querySelector(".reset-vals");
const screen = document.getElementById("math-operation");
const clear = document.getElementById("reset");
const equal = document.getElementById("equal");

let completeVal = "";
let num1 = [];
let num2 = [];
let sign = "";
let displaySign = "";

let cal1 = "";
let cal2 ="";
let sol = []; //Converting to array to store multiple values to make it easier to display and calculate
let h6Val = "";

//An object that stores arrow functions for all mathematical operations, we will call this object to run operations
const methods = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
  remainder: (a, b) => a % b
};

//Extracting the number 1 & 2 array value from the element and displaying it inside the input
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", () => {
      if (sign === "") {
          num1.push(numbers[i].textContent);
      } 
      
      else {
        num2.push(numbers[i].textContent);
      }
      const joinedValue = num1.join("");
      const joinedValue2 = num2.join("");
      completeVal = joinedValue + " " + displaySign + " " + joinedValue2;
      screen.value = completeVal;
    });
  }

//Figuring out the operator that the user wants to perform and storing inside of a variable
for (let j = 0; j < operator.length; j++) { 
  operator[j].addEventListener("click", () => {
    if(sign===""){
        sign = operator[j].getAttribute("id");
        displaySign = operator[j].textContent;
        completeVal += displaySign;
        screen.value = completeVal;
    }
    
    else {
      const calc = completeVal.split(" ");
      cal1 = +calc[0];
      cal2 = +calc[2];
      calculate(cal1,cal2)
    }
  });
}

//Adding Equal sign button functionality
equal.addEventListener("click",()=>{
  const callVal = completeVal.split(" ");
  cal1 = +callVal[0];
  cal2 = +callVal[2];

  calculate(cal1,cal2);
});


//Creating a function to calculate the values inputed at various steps to avoid repeating myself
function calculate (cal1,cal2){
    if(methods.hasOwnProperty(sign)){
      if (isNaN(cal2)){
        cal2 = 0;
      }
      if (cal2 === 0 && sign === "divide"){ //Conditional checks if the 2nd value inputed is 0 and does not call the object instead shows a warning
        h6.textContent = "Please enter a valid input";
      }

      sol.push(methods[sign](cal1,cal2));
      screen.value = sol[sol.length - 1];
      h6Val = completeVal;
      h6.textContent = h6Val;

      //Resetting/Reassigning all the other values to ensure proper multiple calculations
      sign ="";
      num1 = [sol[sol.length - 1]];
      num2 = [];
      displaySign = "";
      completeVal = "";
    }
  };

//Resetting Values back to 0 with AC button
clear.addEventListener("click", () => {
  screen.value = "";
  num1 = [];
  num2 = [];
  completeVal = "";
  sign="";
  displaySign ="";
  h6.textContent = "";
  sol = [];
});

//Adding Backspace functionality
