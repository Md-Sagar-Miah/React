import React,{useReducer,useState} from 'react';

const BooksList =[
    {
        id:1,
        name:"Book-1"
    },
    {
        id:2,
        name:"Book-2"
    },
    {
        id:3,
        name:"Book-3"
    }
]

function UseReducer() {

    const [bookname,setBookName]=useState("");

    

    const reducer=(state,action)=>{
        if(action.type==="ADD"){
            const allBooks=[...state.books,action.payLoad ]

            return{
                ...state,
                books:allBooks,
                isModalOpen:true,
                modalText:"Book is added"
            }
        }
        if(action.type==="REMOVE"){
            const filterBooks=[...state.books].map((book)=> book.id!==action.payLoad);
            return{
                ...state,
                books:filterBooks,
                isModalOpen:true,
                modalText:"Book is Remove"
            }
        }

    }

    const[bookState,dispatch]=useReducer(reducer,{
        books:BooksList,
        isModalOpen:false,
        modalText:""
    });
    
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        const newBook={ id:new Date().getTime().toString(),name:bookname};
        dispatch({type:"ADD",payLoad:newBook})
    }

    const handlBook=(id)=>{
        dispatch({type:"REMOVE",payLoad:id});
    }

  return (
    <div>
        <h3>Books List</h3>
        <form onSubmit={handleSubmit} >
            <input  type="text" value={bookname} onChange={(e)=>setBookName(e.target.value)} required />
            <button type="submit">ADD</button>
        </form>
        {/* {bookState.isModalOpen && <Modal modalText={bookState.modalText}/> } */}

        {bookState.books.map((book)=>{
            return(
                <li key={book} >{book.name} <button onClick={()=> handlBook(book.id)}>Delete</button></li>
            )
        })}
      
    </div>
  )
}

export default UseReducer;
