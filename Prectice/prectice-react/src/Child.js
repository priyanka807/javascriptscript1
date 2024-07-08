import React from 'react'

function Child({handleIncrease},ref){
    console.count("count")
  return (
    <div>
          <button onClick={()=>handleIncrease()} ref={ref}>Increase</button>
    </div>
  )
}

export default React.forwardRef(Child)