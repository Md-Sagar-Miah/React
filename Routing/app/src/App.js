import {BrowserRouter, Route, Routes} from "react-router-dom";

import "./App.css";

import Nav from "./Components/Nav";
import About from "./Pages/About";
import Blogs from "./Pages/Blogs";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { useState } from "react";


function App() {
  const [loginStatus,setStatus]=useState(false);
  const handleLogin=(e)=>{
   
    setStatus(e);
    
  }
  return (
    <>

    {!loginStatus&& <h1>Login First</h1> }
    
    <BrowserRouter>
    <Nav />
    <Login handleLogin={handleLogin} />
  {loginStatus&&
    <Routes>
      <Route path="/" element={<Home  />} />
      <Route path="/blogs" element={<Blogs  />} />
      <Route path="/blogs/:title" element={<Blog  />} />
      <Route path="/about" element={<About  />} />
      <Route path="/contact" element={<Contact  />} />

    </Routes>}
    </BrowserRouter>
    </>
  );
}

export default App;
