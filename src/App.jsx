
import { useState } from 'react'
import './App.css'

function App() {
  const [display,setDisplay] =useState(' ')
  const handleClick = (value)=>{
    setDisplay(display + value)
  }
 
  const handleSubmit = (e) =>{
    e.preventDefault ();
  }
  const calculateResult = () =>{
    try{
        const result = eval(display)
        setDisplay(result);
    }catch(error){
         setDisplay('Error')
    }
  }
  const clearDisplay = ()=>{
    setDisplay('')
  }

  return (
    <>
     <div className="containerss">

<div className="calculater" > 
  <form onSubmit={handleSubmit}> 
    <div className="display">
      <input  placeholder={display} id="display" type="text" className="form-control" readonly/>
    </div>

    <div>
      <button  onClick={()=>handleClick('1')}>1</button>
      <button  onClick={()=>handleClick('2')}>2</button>
      <button onClick={()=>handleClick('+')}>+</button>
      <button onClick={()=>handleClick('%')} >%</button>
    </div>

    <div>
      <button id='display' onClick={()=>handleClick('7')}>7</button>
      <button onClick={()=>handleClick('8')}>8</button>
      <button onClick={()=>handleClick('9')}>9</button>
      <button onClick={()=>handleClick('*')}>*</button>
    </div>
    <div>
      <button onClick={()=>handleClick('4')}>4</button>
      <button onClick={()=>handleClick('5')}>5</button>
      <button onClick={()=>handleClick('6')}>6</button>
      <button onClick={()=>handleClick('-')}>-</button>
    </div>
    <div>
      <button onClick={()=>handleClick('1')}>1</button>
      <button onClick={()=>handleClick('2')}>2</button>
      <button onClick={()=>handleClick('3')}>3</button>
      <button onClick={()=>handleClick('+')}>+</button>
    </div>
    <div>
       {/* <button className="value" onclick="displayContent('0')">0</button>   */}
      <button onClick={()=>handleClick('.')}>.</button>
      <button onClick={clearDisplay}>AC</button>
      <button onClick={calculateResult} >=</button>
      <button onClick={()=>handleClick('0')}>0</button>
    </div>
  </form>

</div>
</div>





    </>
  )
}

export default App
