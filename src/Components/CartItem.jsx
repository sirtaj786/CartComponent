import React from 'react'
import LabelPrice from './LabelPrice'
import Quantity from './Quantity'


const CartItem = ({id,label,price,qty, handleChangeQty}) => {
  return (
    <div style={{
      display:"flex",
      gap:"1rem",
      padding:"2rem",
      marginTop:"2rem",
      justifyContent:"center",
      alignItems:"center",
    backgroundColor:"tomato",
      width:"40%",
      margin:"auto",
      boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;"
    }}>
      
        <LabelPrice label={label}
        price={price}/>
        <Quantity id={id} qty={qty} changeCount={ handleChangeQty}/>
   
    </div>
  )
}

export default CartItem