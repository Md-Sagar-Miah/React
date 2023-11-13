import React,{useState} from 'react';
import {v4 as uuidv4} from "uuid";
import Todos from './Todos';
import style from './Home.module.css';
import NewTodo from './NewTodo';

export default function Home() {
    
  const [todos,setTodos]=useState([]);

  const handleAddTodo=(todo)=>{
    setTodos((oldTodos)=>{
      return [...oldTodos,{id:uuidv4(),todo}];
    });
    
  }

  const handleToRemoveTodo=(id)=>{
    setTodos((prevTodo)=>{
      const filteredTodo=prevTodo.filter((todo)=>todo.id!==id);
      return filteredTodo;
    })
  }
  

  return (
    <div className={style.container}>
      <h1 style={{color:'white'}}>Todo App</h1>
      <NewTodo onAddTodo={handleAddTodo}/>
      <Todos todos={todos} onRemoveTodo={handleToRemoveTodo}/>

    </div>
  )
}
