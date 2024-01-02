function add (num1, num2){
  return num1 + num2;
}

function subtract (num1, num2){
  return num1 - num2;
}

function multiply (num1, num2){
  return num1 * num2;
}

function divide (num1, num2){
  return num1 / num2;
}

function power (num1, num2){
  return num1 ** num2;
}

function factorial(num1){
  for(let i = num1 - 1; i >= 1; i--){
    num1 *= i;
  }
  return num1;
}

function calculator(operation, num1, num2) {
  switch(operation){
    case "add":
      return add(num1, num2);
    case "subtract":
      return subtract(num1, num2);
    case "multiply":
      return multiply(num1, num2);
    case "divide":
      return divide(num1, num2);
    case "power":
      return power(num1, num2);
  }
}


let displayVal = "";

let num1 = null;
let num2 = null;

let result = null;
let lastOperation = "";
let currOperation = "";

const numButtons = document.querySelectorAll(".num");
const operateButtons = document.querySelectorAll(".operate");

for(let i = 0; i < numButtons.length; i++){
  numButtons[i].addEventListener("click", () => {
    displayVal += numButtons[i].textContent;
    document.querySelector(".display").textContent = displayVal;
    console.log(displayVal);
  })
}


for(let j = 0; j < operateButtons.length; j++){

  operateButtons[j].addEventListener("click", () => {

    if(num1 == null){
    num1 = parseInt(displayVal, 10);
    displayVal = "";
    lastOperation = operateButtons[j].classList[0];
    }
    else if(num2 == null){
      currOperation = operateButtons[j].classList[0];
      num2 = parseInt(displayVal, 10);
      displayVal = "";
      result = calculator(lastOperation, num1, num2);
      document.querySelector(".display").textContent = result;
      lastOperation = currOperation;
    }
    else if(currOperation === "equals"){
      lastOperation = operateButtons[j].classList[0];
      currOperation = "";
    }
    else{
      currOperation = operateButtons[j].classList[0];
      num2 = parseInt(displayVal, 10);
      displayVal = "";
      result = calculator(lastOperation, result, num2);
      document.querySelector(".display").textContent = result;
      lastOperation = currOperation;
    }
  })
}

document.querySelector(".equal_btn").addEventListener("click", () =>{
  if(result === null){
  num2 = parseInt(displayVal, 10);
  displayVal = "";
  result = calculator(lastOperation, num1, num2);
  document.querySelector(".display").textContent = result;
  currOperation = "equals";
  }
  else{
  num2 = parseInt(displayVal, 10);
  displayVal = "";
  result = calculator(lastOperation, result, num2);
  document.querySelector(".display").textContent = result;
  currOperation = "equals";
  }
})

document.querySelector(".clearbtn").addEventListener("click", () => {
 displayVal = "";
 document.querySelector(".display").textContent = displayVal;
 num1 = null;
 num2 = null;

 result = null;
 lastOperation = "";
 currOperation = "";
})