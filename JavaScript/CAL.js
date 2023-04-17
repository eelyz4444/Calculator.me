const display = document.querySelector('.display');
const clearBtn = document.querySelector('.clear');
const backspaceBtn = document.querySelector('.backspace');
const numberBtns = document.querySelectorAll('.number');
const operatorBtns = document.querySelectorAll('.operator');
const decimalBtn = document.querySelector('.decimal');
const equalsBtn = document.querySelector('.equals');

let currentDisplayValue = '0';


numberBtns.forEach(button => {
  button.addEventListener('click', () => {
    if (currentDisplayValue === '0') {
      currentDisplayValue = button.value; 
    } else {
      currentDisplayValue += button.value; 
    }
    display.textContent = currentDisplayValue;
  });
});


operatorBtns.forEach(button => {
  button.addEventListener('click', () => {
    currentDisplayValue += ` ${button.value} `; 
    display.textContent = currentDisplayValue; 
  });
});


decimalBtn.addEventListener('click', () => {
  if (!currentDisplayValue.includes('.')) { 
    currentDisplayValue += '.';
    display.textContent = currentDisplayValue; 
  }
});


equalsBtn.addEventListener('click', () => {
  currentDisplayValue = eval(currentDisplayValue); 
  display.textContent = currentDisplayValue; 
});


backspaceBtn.addEventListener('click', () => {
  currentDisplayValue = currentDisplayValue.slice(0, -1); 
  
  if (currentDisplayValue === '') { 
    currentDisplayValue = '0';
  }
  display.textContent = currentDisplayValue; 
});


clearBtn.addEventListener('click', () => {
  currentDisplayValue = '0'; 
  display.textContent = currentDisplayValue;
});