import React from 'react'
import { useState } from 'react'
import Total from './Total'
import CartItem from "./CartItem"
const initdata=[
  {
  id:1,
  product_name:"Noodles",
  price:30,
  qty:1
},
{
  id:2,
  product_name:"Biryani",
  price:300,
  qty:2
}, {
  id:3,
  product_name:"Chips",
  price:90,
  qty:3
}
]
const calculateTota=(productus)=>{
        
    return  productus.reduce((acc,c)=>acc+(c.qty*c.price),0)
  }

const CartContainer = () => {
      const [data,setData]=useState(initdata)
     
  const handleChangeQty=(id,amount)=>{
    let updatedData=data.map(item=>{
      if(item.id===id){
        return{
          ...item,
          qty:item.qty+amount
        }
      }
      else{
        return item
      }
    })
    setData(updatedData)
  }
 
     return (
     <div style={{border:"2px solid tomato",
     width:"50%",
     margin:"auto"
     }}>
         {
      data.map(item=><CartItem
      key={item.id}
      id={item.id}
      label={item.product_name}
      qty={item.qty}
      price={item.price*item.qty}
      handleChangeQty={handleChangeQty}
      />
      )
      }

        <Total total={calculateTota(data)}/>


    </div>
  )
}

export default CartContainer