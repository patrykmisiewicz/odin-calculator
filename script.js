let firstNumber = null;

document.addEventListener('DOMContentLoaded', () => {
    const outcomeElement = document.querySelector('.outcome');
  
    const buttons = document.querySelectorAll('.buttons button:not(.operator, .tool)');
    const commaButton = document.querySelector('.comma');
    const clearButton = document.querySelector('.clear');
  
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

    const addButton = document.querySelector('.operator.add');

    addButton.addEventListener('click', () => {
      firstNumber = parseFloat(outcomeElement.textContent);
      outcomeElement.textContent = '0';
    });
      
    clearButton.addEventListener('click', () => {
      outcomeElement.textContent = '0';
    });
  
    function updateOutcome(text) {
        if (outcomeElement.textContent === '0' && text !== ',') {
          outcomeElement.textContent = text;
        } else if (text === ',' && outcomeElement.textContent.includes(',')) {
          return;
        } else if (outcomeElement.textContent.length < 12) {
          outcomeElement.textContent += text;
        }
      }

    const equalButton = document.querySelector('.operator.equal');
    
    equalButton.addEventListener('click', () => {
      const secondNumber = parseFloat(outcomeElement.textContent);
      const result = firstNumber + secondNumber;
      outcomeElement.textContent = result.toString();
    }); 
  });
 