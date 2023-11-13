import React, {useState} from 'react';
import style from './NewTodo.module.css';

export default function NewTodo(props) {

    const [todo,setTodo]=useState({
        title:"",
        desc:""
    })

    const {title,desc}=todo;

    const handleChange=(event)=>{
        const name=event.target.name;
        setTodo((oldTodo)=>{
            return {...oldTodo,[name]:event.target.value}
        })
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        props.onAddTodo(todo);
        setTodo({title:"",desc:""})
    }
  return (
    <form className={style.form} onSubmit={handleSubmit} >
        <div className={style["form-field"]}>
            <label htmlFor='title'>Title:</label>
            <input type="text" id="tttle" name="title" value={title} onChange={handleChange} />
        </div>
        <div className={style["form-field"]}>
            <label htmlFor='desc'>Decription:</label>
            <textarea type="text" id="desc" name="desc" value={desc} onChange={handleChange}  />
        </div>
        <button type="submit">Add Todo</button>
    </form>
  )
}
