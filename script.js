let firstNumber = null;
let secondNumber = null;
let operator = null;

document.addEventListener('DOMContentLoaded', () => {
    const outcomeElement = document.querySelector('.outcome');
  
    const buttons = document.querySelectorAll('.buttons button:not(.operator, .tool)');
    const commaButton = document.querySelector('.comma');
    const clearButton = document.querySelector('.clear');
    const addButton = document.querySelector(`.add`);
    const equalButton = document.querySelector(`.equal`);
    const substractButton = document.querySelector('.substract');
    const multiplyButton = document.querySelector('.multiply');
    const divideButton = document.querySelector('.divide');
    const percentButton = document.querySelector('.percent');
    const symbolButton = document.querySelector('.symbol');
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const buttonText = button.textContent;
        updateOutcome(buttonText);
      });
    });
  
    commaButton.addEventListener('click', () => {
      const buttonText = commaButton.textContent;
      if (!outcomeElement.textContent.includes(buttonText)) {
        updateOutcome(buttonText);
      }
    });
  
    clearButton.addEventListener('click', () => {
      outcomeElement.textContent = '0';
    });
  
    function updateOutcome(text) {
        if (outcomeElement.textContent === '0' && text !== '.') {
          outcomeElement.textContent = text;
        } else if (text === '.' && outcomeElement.textContent.includes('.')) {
          return;
        } else if (outcomeElement.textContent.length < 12) {
          outcomeElement.textContent += text;
        }
      }

    function saveFirstNumber() {
      firstNumber = outcomeElement.textContent;
      outcomeElement.textContent = '0';
    };

    function saveSecondNumber() {
      secondNumber = outcomeElement.textContent;
    };

    function calculate() {
      if (operator === "+") {
        outcomeElement.textContent = parseFloat(firstNumber) + parseFloat(secondNumber);
      } else if (operator === "-") {
        outcomeElement.textContent = parseFloat(firstNumber) - parseFloat(secondNumber);
      } else if (operator === "/") {
        outcomeElement.textContent = parseFloat(firstNumber) / parseFloat(secondNumber);
      } else if (operator === "*") {
        outcomeElement.textContent = parseFloat(firstNumber) * parseFloat(secondNumber);
      } 
    }

    addButton.addEventListener('click', () => {
      saveFirstNumber();
      operator = "+";
    });

    substractButton.addEventListener('click', () => {
      saveFirstNumber();
      operator ="-";
    })

    multiplyButton.addEventListener('click', () => {
      saveFirstNumber();
      operator ="*";
    })

    divideButton.addEventListener('click', () => {
      saveFirstNumber();
      operator ="/";
    })

    equalButton.addEventListener('click', () => {
      saveSecondNumber();
      calculate();
      fixLength();
    }); 

    percentButton.addEventListener('click', () => {
      saveFirstNumber();
      outcomeElement.textContent = parseFloat(firstNumber) / 100;
    })

    symbolButton.addEventListener('click', () => {
      saveSecondNumber();
      if (parseFloat(secondNumber) > 0) {
        outcomeElement.textContent = "-" + outcomeElement.textContent;
      } else if (parseFloat(secondNumber) < 0) {
        outcomeElement.textContent = outcomeElement.textContent.slice(1);
      }
    })

    function fixLength() {
      if (outcomeElement.textContent.length > 12 && outcomeElement.textContent.includes('.')) {
        outcomeElement.textContent = outcomeElement.textContent.slice(0, 12);
      } else if (outcomeElement.textContent.length > 12 && !outcomeElement.textContent.includes('.')) {
        outcomeElement.textContent = "Overflow!";
      }
    }
  });
 