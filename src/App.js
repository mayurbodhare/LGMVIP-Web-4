import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    setInput(prev => prev + value);
  }

  const calculate = () => {
    try {
      setResult(eval(input));
    } catch (e) {
      setResult("Error");
    }
  }

  const clear = () => {
    setInput("");
    setResult("");
  }

  return (
    <div className="App">
      <div className="calculator">
        <div className="top-section"> 
          <div className="display">
            <div className="input">{input}</div>
            <div className="result">{result}</div>
          </div>
          <button className="clearButton" onClick={clear}>C</button>
        </div>
        <div className="buttons">
          {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'].map(item => (
            <button
              key={item}
              onClick={() => item === '=' ? calculate() : handleButtonClick(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
