import React, { useEffect, useState } from 'react'
import './todos.css'


const Todos = () => {
const [todos, setTodos] = useState([])

useEffect(() =>{
  const getData = async() =>{
    const url = 'https://jsonplaceholder.typicode.com/todos'
    const responce = await fetch(url)
    const data = await responce.json()
    setTodos(data)
    console.log(data)
  }
  getData()
},[])


  return (
    <div className='container-fluid'>
      <h1>Todo List</h1>
      <ul className='todos-container row'>
        {todos.map(eachTodo =>(
          <li className='card col-12 col-md-6 col-lg-4 m-2'>
            <div className=' m-2 d-flex flex-column align-items-center p-3'>
              <h4>{eachTodo.id}</h4>
              <h4>{eachTodo.title}</h4>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todos