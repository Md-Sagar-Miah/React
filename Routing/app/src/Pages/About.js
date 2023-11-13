import React from 'react'
import { useNavigate } from 'react-router-dom'

function About() {
    const navigate = useNavigate();
  return (
    <div>
      <h1>About Us</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, tenetur? Quis debitis nisi, corporis dignissimos aut repudiandae architecto cumque aliquam ipsa odit fugit similique, doloremque nam at sapiente, libero ratione magni reiciendis. Ullam eos voluptate vero? Fugit voluptatem harum consequatur provident eius a iusto sed eveniet? Dolor, dolorem adipisci. Quam alias a tenetur sint. Eos ab error alias distinctio minima sint obcaecati dolorem, ratione recusandae ipsum in velit numquam nisi id accusamus debitis quis fugit soluta voluptate porro assumenda dignissimos ipsam ea quisquam. Perspiciatis nobis voluptas sit vero corporis accusamus assumenda tempora ab dolorem! Odit ex ullam iure soluta iste?</p>
      <button onClick={()=>{
        navigate("/")
    }}>Go to home</button>
    </div>
    
  )
}

export default About
