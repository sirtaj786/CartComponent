import React from 'react'
import Button from './Button'

const Quantity = ({qty,changeCount,id}) => {
  return (
    <div style={{
      display:"flex",
      gap:"1rem"
  }}>
    <Button disabled={qty===0} onClick={()=>changeCount(id,-1)}>-</Button>
    <div>
      <h4>{qty}</h4>
    </div>
    <Button  onClick={()=>changeCount(id,+1)}>+</Button>
        
    </div>
  )
}

export default Quantity