// import React from 'react'
// import { useState } from 'react'

// const Todo = () => {
//     const [data,setData]=useState([])

//     const getTodos=async()=>{
//         try{
//             let data=await fetch("https://jsonplaceholder.typicode.com/todos")
//             data=await data.json()

//         }catch(err){
//             console.log(err)
//         }
//     }
//   return (
//     <div>Todo
//         <button onClick={getTodos}>Fetch</button>
//         <div>
//             {
//                 data.map(todo=>
//                     <div>
//                         <div>{todo.id}</div>
//                         <div>{todo.id}</div>
//                     </div>)
//             }
//         </div>
//     </div>

//   )
// }

// export default Todo

