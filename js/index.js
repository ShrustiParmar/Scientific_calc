"use strict";
let operationDiv = document.getElementById("operation-div");
let resultDiv = document.getElementById("result-div");
function addChar(element) {
  let char = element.getAttribute("data-value");
  operationDiv.innerText += char;
}
// All Clear fun.
function clearScreen() {
  operationDiv.innerText = "";
}
//Backspace fun.
function backspace() {
  let operationValue = operationDiv.innerText;
  let operationValueLength = operationValue.length;
  let newOperationValue = operationValue.substring(0, operationValueLength - 1);
  operationDiv.innerText = newOperationValue;
}
//Calculate fun.
function calculate() {
  let operationValue = operationDiv.innerText;
  operationDiv.innerText = eval(operationValue);
}
// trigonometry function to calculate sine,cos,tan,cot,cosec,sec
function trigonometry(fun) {
  let operationValue = +operationDiv.innerText;
  let result;
  switch (fun) {
    case "sine":
      result = Math.sin(operationValue).toString();
      break;
    case "cos":
      result = Math.cos(operationValue).toString();
      break;
    case "tan":
      result = Math.tan(operationValue).toString();
      break;
    case "cot":
      result = (1 / Math.tan(operationValue)).toString();
      break;
    case "cosec":
      result = (1 / Math.sin(operationValue)).toString();
      break;
    case "sec":
      result = (1 / Math.cos(operationValue)).toString();
      break;
  }
  if (result === "NaN") {
    operationDiv.innerText = "Error";
  } else {
    operationDiv.innerText = result;
  }
}
function calc_square() {
  let operationValue = +operationDiv.innerText;
  operationDiv.innerText = (operationValue * operationValue).toString();
}
function calc_absolute() {
  operationDiv.innerText = Math.abs(+operationDiv.innerText).toString();
}
function calc_exp() {
  operationDiv.innerText = Math.exp(+operationDiv.innerText).toString();
}
function calc_sqrt() {
  operationDiv.innerText = Math.sqrt(+operationDiv.innerText).toString();
}
function calc_factorial() {
  let operationValue = +operationDiv.innerText;
  let result = 1;
  for (let i = operationValue; i >= 1; i--) {
    result *= i;
  }
  operationDiv.innerText = result.toString();
}
function calc_ten_pow() {
  operationDiv.innerText = Math.pow(10, +operationDiv.innerText).toString();
}
// log base 10 function
function calc_log() {
  operationDiv.innerText = Math.log10(+operationDiv.innerText).toString();
}
//natural logarithm function
function calc_ln() {
  operationDiv.innerText = Math.log(+operationDiv.innerText).toString();
}
// MC, MR, M+, M-, MS funtionality
let memoryArr = [];
let mStatus = 0;
function memoryClear() {
  memoryArr = [];
  if (mStatus == 1) {
    document.getElementById("memory-clear").style.opacity = "0.2";
    document.getElementById("memory-recall").style.opacity = "0.2";
  }
}
function memoryRecall() {
  let sum = 0;
  for (let x of memoryArr) {
    sum += x;
  }
  operationDiv.innerText = sum.toString();
}
function memoryPlus() {
  if (operationDiv.innerText != "") {
    memoryArr.push(+operationDiv.innerText);
  }
  if (mStatus == 0 && operationDiv.innerText != "") {
    document.getElementById("memory-clear").style.opacity = "1";
    document.getElementById("memory-recall").style.opacity = "1";
    mStatus = 1;
  }
  operationDiv.innerText = "";
}
function memoryMinus() {
  if (operationDiv.innerText != "") {
    memoryArr.push(+operationDiv.innerText * -1);
  }
  if (mStatus == 0 && operationDiv.innerText != "") {
    document.getElementById("memory-clear").style.opacity = "1";
    document.getElementById("memory-recall").style.opacity = "1";
    mStatus = 1;
  }
  operationDiv.innerText = "";
}
function memorySave() {
  if (operationDiv.innerText != "") {
    memoryArr.push(+operationDiv.innerText);
  }
  if (mStatus == 0 && operationDiv.innerText != "") {
    document.getElementById("memory-clear").style.opacity = "1";
    document.getElementById("memory-recall").style.opacity = "1";
    mStatus = 1;
  }
  operationDiv.innerText = "";
}