// The important variables
let displayValue = "";
let firstKeysPressed = [];
let secondKeysPressed = [];
let operatorPressed = "";
let operators = ["-", "X", "c", "/", ".", "+"];
let sum = 0;

let firstValue = "";
let secondValue = "";
let first = true;

//selectors
let display = document.querySelector(".display");

// add function, returns sum
function add(a, b) {
  return a + b;
}

// subtract function, returns sum
function subtract(a, b) {
  return a - b;
}

// multiply function, returns sum
function multiply(a, b) {
  return a * b;
}

// divide function, returns sum
function divide(a, b) {
  return a / b;
}

// operate function, takes an operator and 2 numbers and then calls one of the above functions on the numbers
function operate(operator, a, b) {
  add(a, b);
}

// clear function, passes 0 to displayChange as to clear the display
function clear() {
  displayChange(0);
}

//displayChange function, takes a value and updates the display with it
function displayChange(a) {
  const display = document.querySelector(".display");
  display.textContent = `${a}`;
}

//whichButton function, receives a data-key value and updates lastKeyPress variable with the corresponding value.
function whichButton(key) {
  switch (key) {
    case key == 56:
      lastKeyPress = "8";
      break;

    case key == 57:
      lastKeyPress = "9";
      break;

    case key == 67:
      lastKeyPress = "c";
      break;

    case key == 52:
      lastKeyPress = "4";
      break;

    case key == 53:
      lastKeyPress = "5";
      break;

    case key == 54:
      lastKeyPress = "6";
      break;

    case key == 88:
      lastKeyPress = "x";
      break;

    case key == 49:
      lastKeyPress = "1";
      break;

    case key == 50:
      lastKeyPress = "2";
      break;

    case key == 51:
      lastKeyPress = "3";
      break;

    case key == 189:
      lastKeyPress = "-";
      break;

    case key == 48:
      lastKeyPress = "0";
      break;

    case key == 190:
      lastKeyPress = ".";
      break;

    case key == 48:
      lastKeyPress = "=";
      break;

    case key == 187:
      lastKeyPress = "+";
      break;
  }
}

//buttonPressed function, gets called when a button is called. Receives the data-key value. Calls whichButton,
//then checks what type of value lastKeyPress now has to determine next step
function buttonPressed() {
  ///console.log(this.dataset.key);
  display.textContent += this.textContent;

  if (this.textContent === "C") {
    display.textContent = "";
    firstKeysPressed = [];
    secondKeysPressed = [];
    operatorPressed = "";
    sum = 0;
    firstValue = "";
    secondValue = "";
    first = true;
  } else if (operators.includes(this.textContent)) {
    operatorPressed = this.textContent;
    first = false;
  } else if (first === true) {
    firstKeysPressed.push(this.textContent);
  } else if (this.textContent != "=") {
    secondKeysPressed.push(this.textContent);
  } else {
    firstKeysPressed.forEach((numString) => {
      firstValue += numString;
    });
    secondKeysPressed.forEach((numString) => {
      secondValue += numString;
    });
  }

  if (this.textContent === "=") {
    display.textContent = "";
    switch (operatorPressed) {
      case "+":
        sum = add(+firstValue, +secondValue);
        display.textContent = String(sum);
        break;
      case "-":
        sum = subtract(+firstValue, +secondValue);
        display.textContent = String(sum);
        break;
      case "x":
        sum = multiply(+firstValue, +secondValue);
        display.textContent = String(sum);
        break;
      case "/":
        sum = divide(+firstValue, +secondValue);
        display.textContent = String(sum);
        break;
    }
    firstValue = String(sum);
    firstKeysPressed = [];
    secondKeysPressed = [];
    operatorPressed = "";
    sum = 0;
    secondValue = "";
  }
}

let keyButtons = document.querySelectorAll(".calcButton");

keyButtons.forEach((calcButton) => {
  calcButton.addEventListener("click", buttonPressed);
});
