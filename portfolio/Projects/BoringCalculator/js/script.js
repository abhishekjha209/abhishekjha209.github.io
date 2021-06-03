let runningTotal = 0;
let buffer = "0";
let previousOperator;
const screen = document.querySelector(".screen");

function rerender() {
    screen.innerText = buffer;
}

function flushOperation(intBuffer) {
    
    if (previousOperator === "+") {
      runningTotal += intBuffer;
    } else if (previousOperator === "−") {
      runningTotal -= intBuffer;
    } else if (previousOperator === "×") {
      runningTotal *= intBuffer;
    } else {
      runningTotal /= intBuffer;
    }
  }
  

function handleMath(symbol) {
    if (buffer === "0") {
      // do nothing
      return;
    }
  
    const intBuffer = parseInt(buffer);
    if (runningTotal === 0) {
      runningTotal = intBuffer;
    } else {
      flushOperation(intBuffer);
    }
  
    previousOperator = symbol;
    buffer = "0";
}


function handleSymbol(value) {
    console.log("symbol ", value);

    switch (value) {
      case "C":
        buffer = "0";
        runningTotal = 0;
        break;
      case "=":
        if (previousOperator === null) {
          // need two numbers to do math
          return;
        }
        flushOperation(parseInt(buffer));
        previousOperator = null;
        buffer = +runningTotal;
        runningTotal = 0;
        break;
      case "←":
        if (buffer.length === 1) {
          buffer = "0";
        } else {
          buffer = buffer.substring(0, buffer.length - 1);
        }
        break;
        
      case "+":
      case "−":
      case "×":
      case "÷":
        handleMath(value);
        break;
    }
}


function handleNumber(value) {
    if (buffer === "0") {
      buffer = value;
    } else {
      buffer += value;
    }
}

function buttonClick(value) {
    if (isNaN(parseInt(value))) {
      handleSymbol(value);
    } else {
      handleNumber(value);
    }
  rerender();
}

function init() {
    document
      .querySelector(".calc-buttons")
      .addEventListener("click", function(event) {
        buttonClick(event.target.innerText);
      });
  }
  
init();