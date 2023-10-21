import React, { useState } from 'react';

function Calculator() {
  const [result, setResult] = useState(0);
  const [operand1, setOperand1] = useState('');
  const [operand2, setOperand2] = useState('');
  const [operator, setOperator] = useState('');

  const handleOperandChange = (event) => {
    const { name, value } = event.target;
    if (name === 'operand1') {
      setOperand1(value);
    } else if (name === 'operand2') {
      setOperand2(value);
    }
  };

  const handleOperatorChange = (event) => {
    setOperator(event.target.value);
  };

  const handleCalculate = () => {
    let calculatedResult;
    const num1 = parseFloat(operand1);
    const num2 = parseFloat(operand2);

    switch (operator) {
      case '+':
        calculatedResult = num1 + num2;
        break;
      case '-':
        calculatedResult = num1 - num2;
        break;
      case '*':
        calculatedResult = num1 * num2;
        break;
      case '/':
        calculatedResult = num1 / num2;
        break;
      default:
        return;
    }

    setResult(calculatedResult);
  };

  return (
    <div>
      <h1>Calculator</h1>
      <input
        type="number"
        name="operand1"
        value={operand1}
        onChange={handleOperandChange}
      />
      <select value={operator} onChange={handleOperatorChange}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input
        type="number"
        name="operand2"
        value={operand2}
        onChange={handleOperandChange}
      />
      <button onClick={handleCalculate}>=</button>
      <div>
        Result: <span>{result}</span>
      </div>
    </div>
  );
}


export default Calculator;