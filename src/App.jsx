import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleOperation = (op) => {
    if (num1 === "" || num2 === "") {
      setMessage("Error!");
      setErrorMessage(`${num1 === "" ? "Num1" : "Num2"} Cannot Be Empty`);
      return;
    }

    let calculatedResult;
    switch (op) {
      case "+":
        calculatedResult = parseFloat(num1) + parseFloat(num2);
        break;
      case "-":
        calculatedResult = parseFloat(num1) - parseFloat(num2);
        break;
      case "*":
        calculatedResult = parseFloat(num1) * parseFloat(num2);
        break;
      case "/":
        calculatedResult = parseFloat(num1) / parseFloat(num2);
        break;
      default:
        setMessage("Invalid operation");
        return;
    }

    setMessage("Success!");
    setErrorMessage(""); 
    setResult(calculatedResult.toFixed(2));
  };

  return (
    <div className="App">
      <div className="calculator-card">
        <h2>React Calculator</h2>
        <input
          className="numbers"
          type="text"
          placeholder="Num 1"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          className="numbers"
          type="text"
          placeholder="Num 2"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
        <div className="operation-buttons">
          <button onClick={() => handleOperation("+")}>+</button>
          <button onClick={() => handleOperation("-")}>-</button>
          <button onClick={() => handleOperation("*")}>*</button>
          <button onClick={() => handleOperation("/")}>/</button>
        </div>
        {message === "Error!" && (
          <>
            <p className="error-message">{message}</p>
            <p className="error-details">{errorMessage}</p>
          </>
        )}
        {message === "Success!" && (
          <>
            <p className="success-message">{message}</p>
            <p>Result: {result}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
