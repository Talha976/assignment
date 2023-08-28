import React, { useState } from 'react';
import './css/counter.css'

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const increase = ()=>{
        setCounter ( counter + 1 );
    }
    const decrease = () =>{
        setCounter ( counter - 1 ) ;
    }
    const reset = ()=>{
        setCounter(0);
    }
  return (
    <div>
    <div className='container'>
      <h1>Counter</h1>
      <h1> {counter} </h1>
   <div className='button_div'>
   <button className='btn btn-outline-dark' onClick={()=>increase()}>+</button>
   <button className='btn btn-outline-dark' onClick={()=>decrease()}>-</button>
   <button className='btn btn-outline-dark' onClick={()=>reset()}>Reset</button>
   </div>
    </div>
    </div>
  )
}

export default Counter
