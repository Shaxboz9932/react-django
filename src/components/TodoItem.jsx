import React, { useEffect, useState } from 'react'
import api from '../services/axiosData'
import { jwtDecode } from 'jwt-decode'

function TodoItem({todos, fetchData, token}) {

  const onDelete = (e, id, author) => {
    e.preventDefault()
    const deleteTodo = async() => {
      await api.delete(`/todo/delete/${id}`)
      await fetchData()
    }
    if (author === jwtDecode(token).username){
      deleteTodo()
    }else{
      console.log('Siz buni o\'chira olmaysiz!!')
    }
  }

  return (
    <div className='container mt-2'>
      <h4>Todo List</h4>
        {todos && todos.map((todo, idx) => {
          return <div key={todo.id} className="d-flex justify-content-between mt-1">
            <div className=''>{idx+1}. <b>{todo.title}</b> | Author: {todo.author}</div>
            <div>
              <button className='btn btn-primary mx-2' style={{fontSize: '0.8rem'}}>Edit</button>
              <button onClick={(e) => onDelete(e, todo.id, todo.author)} className='btn btn-danger' style={{fontSize: '0.8rem'}}>Delete</button>
            </div>
          </div>  
        })}
      </div>
  )
}

export default TodoItem
