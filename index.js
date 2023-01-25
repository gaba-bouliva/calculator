
function operate(firstValue, operation, secondValue){
  
  /**
   * Call the right arithmetic operation based on the operation sign
   * return a String version of the result of the arithmethic operation
   */

  let firstNum = parseFloat(firstValue);
  let secondNum = parseFloat(secondValue)

  if(operation === '+'){
    return (add(firstNum, secondNum)).toFixed(2);
  }
  if(operation === '-'){
    return (subtract(firstNum, secondNum)).toFixed(2);
  }
  if(operation === '/'){
    return (divide(firstNum, secondNum)).toFixed(2);
  }
  if(operation === 'x'){
    return (multiply(firstNum, secondNum)).toFixed(2);
  }
}


 const add = function(firstNum, secondNum) {
	return firstNum + secondNum;
};

const subtract = function(firstNum, secondNum) {
	return firstNum - secondNum;
};

const multiply = function(firstNum, secondNum) { 
  
  return firstNum * secondNum;

};

const divide = function (firstNum, secondNum){
  if (secondNum === '0') return 'undefined';
  else return firstNum / secondNum;
}

let firstValue = '';
let secondValue = '';
let operation = '';


const resultDisplaySpan = document.querySelector('.result-display>span');
const inputsDisplaySpan = document.querySelector('.inputs-display>span');

document.querySelector('.clear-operation').addEventListener('click', () =>{
  firstValue = '';
  secondValue = '';
  operation = '';
  inputsDisplaySpan.textContent = '';
})

document.querySelector('.clear-result').addEventListener('click', () =>{
  resultDisplaySpan.textContent = '';
})

/**
 * Add click event on all operands
 */

document.querySelectorAll('.operand').forEach( (operandBtn) =>{
  operandBtn.addEventListener('click', () =>{

    if(operandBtn.textContent !== '='){
      document.querySelector('.inputs-display>span').textContent += operandBtn.textContent;
    }

    if(operandBtn.textContent === '='){
      if(firstValue && secondValue){
        let finalResult = operate(firstValue, operation, secondValue);
        console.log(`Final Result = ${finalResult}`);
        resultDisplaySpan.textContent = finalResult;
      }
    }
    if(operation){
      secondValue += operandBtn.textContent;
    }else{
      firstValue += operandBtn.textContent;
    }
  })
})

/**
 * Add click event listener on all arithmetic operation buttons
 */
document.querySelectorAll('.operation').forEach((mathOperationBtn) =>{
  mathOperationBtn.addEventListener('click', () =>{
    document.querySelector('.inputs-display>span').textContent += mathOperationBtn.textContent;
    
    if(operation){
      let result = operate(firstValue, operation, secondValue);
      firstValue = result;
      secondValue = '';
      operation = mathOperationBtn.textContent;
      
    }else{
      operation = mathOperationBtn.textContent;
    }
  })
})


