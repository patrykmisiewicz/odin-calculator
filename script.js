document.addEventListener('DOMContentLoaded', () => {
    const outcomeElement = document.querySelector('.outcome');
  
    const buttons = document.querySelectorAll('.buttons button:not(.operator, .tool)');
    const commaButton = document.querySelector('.comma');
    const clearButton = document.querySelector('.tool');
  
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
      if (outcomeElement.textContent === '0' && text !== ',') {
        outcomeElement.textContent = text;
      } else if (text === ',' && outcomeElement.textContent.includes(',')) {
        return;
      } else {
        outcomeElement.textContent += text;
      }
    }
  });