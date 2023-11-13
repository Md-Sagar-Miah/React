import React from 'react'
import {Link, useNavigate} from "react-router-dom";

import { BlogsData } from '../Data/Data';



function Blogs() {
    const navigate=useNavigate();

    const slicData=(body)=>{
      const data= body.slice(0,50);
      return data+" ...";
    }

    
  return (
    
    <div>
      <h1>Blogs</h1>
      
      {BlogsData.map((blog)=>{
        const {id,title,body}=blog;
       return <section key={id}>
                <article>
                <h2>{title }</h2>
                <p>{slicData(body)}</p>
                
                <Link to={title} state={{id,title,body}} >Learn more</Link>
                </article>
              </section>

      })}

    <button onClick={()=>{
        navigate("/")
    }}>Go to home</button>

    </div>
    
  )
}

export default Blogs
