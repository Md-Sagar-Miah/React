import React ,{useRef} from 'react';

function UserForm() {

    const nameRef=useRef();
    const passwordRef=useRef();

    const handleSubmit =(event)=>{
        event.preventDefault();
        const userName =nameRef.current.value;
        const password=passwordRef.current.value;
        console.log({userName,password});
    }

  return (
    <form onSubmit={handleSubmit} >
        <div>
            <label htmlFor='name' >Name :</label>
            <input type="text" name="name" id="name" ref={nameRef} />
        </div>
      
        <div>
            <label htmlFor='email' >Email :</label>
            <input type="email" name="email" id="email" ref={passwordRef} />
        </div>
        <button type="submit">Submit</button>
      
    </form>
  )
}

export default UserForm
