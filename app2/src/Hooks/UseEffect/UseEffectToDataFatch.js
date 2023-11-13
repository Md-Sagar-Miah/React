import React,{useState,useEffect} from 'react';

function UseEffectToDataFatch() {
    const [todos,setTodo]=useState(null);
    const [isLoading,setIsLoading]=useState(true);
    const [error,setError]=useState(null);

    const loadingMessage="Data is loading.....";
    

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/photos")
        .then((res)=>{
            if(res.ok){
                return res.json();
            }
            else{
                throw Error();
            }
            
        })
        .then((data)=>{
            setTodo(data);
            setIsLoading(false);
            setError(null);
        })
        .catch((error)=>{
            setError(error.message);
            setIsLoading(false);
        })
    },[])
  return (
    <div>
        {isLoading && <h1>{loadingMessage}</h1> }
        {error && <h1>{error}</h1>}
        
      {todos && todos.map((todo)=>{
        return (
            
            <section key={todo.id}>
                <h1>{todo.title}</h1>
                <img src={todo.thumbnailUrl} alt=""/>
            </section>
        )
      })}
    </div>
  )
}

export default UseEffectToDataFatch
