import React, { useCallback, useEffect, useRef, useState, useMemo } from 'react'
import api from '../services/axiosData'

function TodoAddForm({author_id, fetchData}) {

  const inputTodo = useRef(null)

  const addTodo = async() => {
    await api.post('/todo/add/', {
      title: inputTodo.current.value,
      author: author_id
    })
    fetchData()
  }

  const onAddTodo = (e) => {
    e.preventDefault()
    addTodo() 
  }

  return (
    <div>
      <div className="card">
        <div className="card-header">
            <h3>Todo Add</h3>
        </div>
        <div className="card-body">
            <form className='form-group'>
                <input ref={inputTodo} type="text" placeholder='Input Your Todo....' className='form-control w-50 mb-2'/>
                <button onClick={(e) => onAddTodo(e)} style={{fontSize: '0.9rem'}} className='btn btn-success fs-8 fw-bold'>Add Todo</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default TodoAddForm
