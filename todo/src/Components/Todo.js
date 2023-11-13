import React from 'react';
import style from './Todo.module.css';

export default function Todo(props) {
    const {title,desc}=props.todo;
    const {id}=props;

  const handleIdToDelete=(id)=>{
    props.onRemoveTodo(id);
  }

  return (
    <article className={style.todo}>
        <div>
        <h1>{title}</h1>
        <p>{desc}</p>
        </div>
        <div>
            <button className={style.btn} onClick={()=>{
              handleIdToDelete(id);
            }}>
                <i className='fa fa-trash fa-2x'></i>
            </button>
        </div>
        
    </article>
  )
}
