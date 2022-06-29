import React from 'react'

const Button = ({onClick,disabled,children}) => {
  return (
    <div>
        <button style={{
            padding:"1rem",
            border:0,
            borderWidth:0,
            fontWeight:"bold",
            backgroundColor:"tomato",
            color:"white"
        }} disabled={disabled} onClick={onClick}>{children}</button>
    </div>
  )
}

export default Button