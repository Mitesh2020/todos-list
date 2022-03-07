import React from 'react'
import {TodosItems} from "./TodosItems";

export const Todos = (props) => {
  let myStyle={
    minHeight : "70vh",
    margin: "40px auto"
  }
  return (
    <div className='container' style={myStyle}>
      <h2 className='my-3'>Todos List</h2>
      {props.todos.length===0? "No todos left to display" :
      props.todos.map((todo)=>
      {
        return (
        <>
        <TodosItems todo={todo} key={todo.sr} onDelete={props.onDelete}/> <hr/>
        </>)
      })}
      
      
    </div>
  )
}
