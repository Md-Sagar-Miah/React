import React from 'react';
import { useParams,useLocation } from 'react-router-dom';

// import { BlogsData } from '../Data/Data';


function Blog() {
  const location=useLocation();

    // const {title}=useParams();
    // const Blog=BlogsData.filter((blog)=>{
    //     var Data;
    //     if(blog.title===title){
    //          Data= blog;
    //     }
    //     return Data;
    // })
  return (
    <>
    <h2>{location.state.title}</h2>
    <p>{location.state.body}</p>
      
    </>
  )
}

export default Blog
