import React from 'react'

export const TodosItems = ({todo,onDelete}) => {
  return (
    <>
    <h5 className='my-3'>{todo.title}</h5>
    <p>{todo.desc}</p>
    <button className='btn btn-sm btn-danger' onClick={()=>{onDelete(todo)}}>Delete</button>
    </>
  )
}
