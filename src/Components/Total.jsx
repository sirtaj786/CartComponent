import React from 'react'

const Total = ({total}) => {
  return (
    <div style={{border:"1px solid red",
    width:"45%",margin:"auto",
     marginTop:"2rem",
     height:"40px",
    fontWeight:'680'}}>Total:₹{total}</div>
  )
}

export default Total