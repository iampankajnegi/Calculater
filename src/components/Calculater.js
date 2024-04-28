import React, { useState } from 'react'
import "./Calu.css"

const Calculater = () => {

const [inputValue , setInput] = useState("")
const [result , setResult] = useState("")

const addToInput = (value) =>{

     setInput((preState) => preState + value)
}


const calculate = () =>{
try {
      let resultValue = eval(inputValue);

      setResult(isNaN(resultValue) ? "NaN" : resultValue)
}

catch(error){

    setResult("Error")

    
}

}



const clearInput = () =>{

  setInput("")
  setResult("")
}

  return (
    <div className='container'>
      <h1>Calculater</h1>
        <div className="calculater">
          <input type="text"
          id = "input-bar"
          value = {inputValue} 
          />
        </div>

        <div className="result">{result}</div>

        <div className="buttons">
           <button onClick={() => addToInput('7')}>7</button>
        <button onClick={() => addToInput('8')}>8</button>
        <button onClick={() => addToInput('9')}>9</button>
        <button onClick={() => addToInput('+')}>+</button>
        <button onClick={() => addToInput('4')}>4</button>
        <button onClick={() => addToInput('5')}>5</button>
        <button onClick={() => addToInput('6')}>6</button>
        <button onClick={() => addToInput('-')}>-</button>
        <button onClick={() => addToInput('1')}>1</button>
        <button onClick={() => addToInput('2')}>2</button>
        <button onClick={() => addToInput('3')}>3</button>
        <button onClick={() => addToInput('*')}>*</button>
        <button onClick={clearInput}>C</button>
        <button onClick={() => addToInput('0')}>0</button>
        
        <button onClick={calculate}>=</button>
        <button onClick={() => addToInput('/')}>/</button>
       
        </div>
    </div>
  )
}

export default Calculater