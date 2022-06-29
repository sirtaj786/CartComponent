import React from 'react'
import LabelPrice from './LabelPrice'
import Quantity from './Quantity'


const CartItem = ({id,label,price,qty, handleChangeQty}) => {
  return (
    <div style={{
      display:"flex",
      gap:"1rem",
      padding:"2rem",
      marginTop:"30px",
      justifyContent:"center",
      alignItems:"center",
   // backgroundColor:"tomato",
      width:"40%",
      margin:"auto",
      border:"2px solid tomato"
    }}>
      
        <LabelPrice label={label}
        price={price}/>
        <Quantity id={id} qty={qty} changeCount={ handleChangeQty}/>
   
    </div>
  )
}

export default CartItem