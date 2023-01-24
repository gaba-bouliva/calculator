/**
 * Add click events on all operands and operations
 * when clicked display on operations display
 * when user click on = sign  determine the operation he intends to do
 * call teh approriote arithmetic operation and retrn the result
 * update the result diplay div with the result
 */
 const add = function(firstNum, secondNum) {
	return firstNum + secondNum;
};

const subtract = function(firstNum, secondNum) {
	return firstNum - secondNum;
};

const multiply = function(numbers) { 
  
  let total = numbers[0];
  for (let i = 0; i < numbers.length - 1; i++) {
    total  *= numbers[i+1];
  }
  return total;

};



const resultDisplaySpan = document.querySelector('.result-display>span');
const inputsDisplaySpan = document.querySelector('.inputs-display>span');

document.querySelector('.clear-operation').addEventListener('click', () =>{
  inputsDisplaySpan.textContent = '';
})

document.querySelector('.clear-result').addEventListener('click', () =>{
  resultDisplaySpan.textContent = '';
})

// add click event on all operands
document.querySelectorAll('.operand').forEach( (operandBtn) =>{
  operandBtn.addEventListener('click', () =>{
    document.querySelector('.inputs-display>span').textContent += operandBtn.textContent; 
  })
})

// add click event on all operations
document.querySelectorAll('.operation').forEach((mathOperationBtn) =>{
  mathOperationBtn.addEventListener('click', () =>{
    document.querySelector('.inputs-display>span').textContent += mathOperationBtn.textContent;
  })
})


