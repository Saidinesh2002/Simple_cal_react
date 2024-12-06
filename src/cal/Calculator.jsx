// src/Calculator.js
import React, { useState } from 'react';
import './Calculator.css'; // Optional: for styling

const Calculator = () => {
  const [input, setInput] = useState(''); // Store the current input
  const [output, setOutput] = useState(''); // Store the result

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
    setOutput('');
  };

  const handleEqual = () => {
    try {
      setOutput(eval(input)); // Use eval to calculate the expression (for simplicity)
      setInput('');
    } catch (error) {
      setOutput('Error');
    }
  };

  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="input">{input || '0'}</div>
        <div className="output">{output}</div>
      </div>
      <div className="buttons">
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
        
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('-')}>-</button>

        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('*')}>*</button>

        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
        <button onClick={handleEqual}>=</button>
        <button onClick={() => handleButtonClick('/')}>/</button>

        <button onClick={handleClear}>C</button>
        <button onClick={handleBackspace}>←</button>
      </div>
    </div>
  );
};

export default Calculator;
