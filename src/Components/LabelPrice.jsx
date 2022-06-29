import React from 'react'

const LabelPrice = ({label,price}) => {
  return (
    <div style={{
        display:"flex",
        gap:"1rem",
        color:"black"
    }}
    >
        <div>{label}</div>
        <div>₹{price}</div>
    </div>
  )
}

export default LabelPrice