import React  from 'react';
import './App.css';
import Child from './Child';
import { useState, useRef } from 'react';

function App() {
  const [state, setState] = useState(0)
  const ref = useRef()
  const handleIncrease=React.useCallback(()=>{
    const buttonElement = ref.current
    if(buttonElement){
      buttonElement.style.backgroundColor = 'red';
    }
    setState((prev)=>prev+1)
  },[setState])

  const giveLongData=React.useMemo(()=>{
    let i=0;
    while(i<100000000){
      i++
    }
    return Math.random(10)
  },[])
console.log(ref.current,"ref")
  return (
    <div className="App">
     <h1>Performance Optimization Chapter {giveLongData}</h1>
     <h3 className='data' >Count : {state}</h3>
     <Child handleIncrease={handleIncrease} ref={ref}/>
    </div>
  );
}

export default App;
