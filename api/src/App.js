
import React , { useEffect, useState } from 'react';
import './App.css';
import Form from './Components/Form';

const url="https://rest-api-without-db.herokuapp.com/users/";


function App() {

  
const [users,setUsers]=useState(null);
const [isLoading,setIsLoading]=useState(true);
const [error,setError]=useState(null);
const [message,setMessage]=useState("");
//update states
const [selectedUser,setSelectedUser]=useState({
  username:"",
  email:""
})
const [selectedUserId,setSelectedUserId]=useState("")

const [updateFlag,setUpdateFlag]=useState(false);

const getAllUsers=()=>{
  
  fetch(url)
  .then((res)=>{
    if(!res.ok){
      throw Error("Data is not found !")
    }
    return res.json()
  })
  .then((data)=>{
    setUsers(data.users);
    setIsLoading(false);

  }).catch((err)=>{
    setError(err.message);
    setIsLoading(false);
  })
}

useEffect(()=>{
    setMessage("Loading..")
    getAllUsers()

},[])

// delete user
const handleDelete=(id)=>{
  setMessage("Deleting...")
  setIsLoading(true);
  fetch(url + `/${id}`,{
    method:"DELETE"
  })
  .then((res)=>{
    if(!res.ok){
      throw Error("Data is not delete !")
    }
    getAllUsers();
    setIsLoading(false);
  })
  .catch((err)=>{
    setError(err.message);
    isLoading(false);
  })
}
// Edit user
const handleEdit=(id)=>{

  setSelectedUserId(id);
  
  const filteredData=users.filter((user)=> user.id===id);

  setSelectedUser({
    username:filteredData[0].username,
    email:filteredData[0].email
  });
 
  setUpdateFlag(true);
  
}

const addUser=(user)=>{
  setMessage("Adding...")
  setIsLoading(true);
  fetch(url ,{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(user)

  })
  .then((res)=>{
    if(!res.ok){
      throw Error("Data is not Post !")
    }
    getAllUsers();
    setIsLoading(false)
  })
  .catch((err)=>{
    setError(err.message);
    setIsLoading(false)
  })
}

const handleUpdate=(user)=>{
  setMessage("Updating...")
  setIsLoading(true);

  fetch(url +`/${selectedUserId}` ,{
    method:"PUT",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(user)

  })
  .then((res)=>{
    if(!res.ok){
      throw Error("Data is not Updated !")
    }
    getAllUsers();
    setIsLoading(false)
    setUpdateFlag(false)
  })
  .catch((err)=>{
    setError(err.message);
    setIsLoading(false)
  })

}

  return (
    <div className="App">
      <h1>User Management App</h1>

      {
        updateFlag ? <Form btnText="Update User" handleSubmitData={handleUpdate} selectedUser={selectedUser} />
        : <Form btnText="Add User" handleSubmitData={addUser} selectedUser={selectedUser} />
      }

      {isLoading && <h3>{message}</h3> }
      {error && <h3>{error}</h3> }

      <section >
        {users && users.map((user)=>{
          const {id,username,email}=user;
          return(
            <section key={id} className="card" >
              <p>{username}</p>
              <p>{email}</p>
              <button className='btn' onClick={()=>handleEdit(id)} >Edit</button>
              <button className='btn' onClick={()=>handleDelete(id)} >Delete</button>
            </section>

          )
        })}
      </section>
     
    </div>
   
  );
}

export default App;
