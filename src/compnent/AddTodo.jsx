import React from 'react'
import { useContext,useState} from 'react';
import { TodoStore } from '../context/TodoContext'

const AddTodo = () => {
  const { todolist,handleAddTodo,handleReadOverley}= useContext(TodoStore);


  // console.log("from Addto componrnt",todolist);

  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  
  

  const handleSubmit = e => {
    e.preventDefault();
    console.log(todolist);

   if(title.length !="")
   {
    const n_characters = details.split("").length;
    const n_words = details.split(" ").length;
    const n_sentence = details.split(".").length -1;
    handleAddTodo({title,details,n_characters,n_words,n_sentence});
   }
   else{
    alert("please enter the details");
   }

   setTitle("");
   setDetails("");

   
   

    

  //   console.log(title);
  // console.log(details);
  
  }
  
  return (
    <article className='flex justify-center items-center'>
      <form  onSubmit={handleSubmit} 
       className="flex flex-col gap-3 w-[70%] lg:w-[50%] ">

        <input type="text" placeholder='title...'  value={title} onChange={e=>{setTitle(e.target.value)}}
         className="text-2xl py-1 px-3 outline-none border-b-4 focus:border-b-blue-400"></input>
    
        
        <textarea type="text" placeholder='detailes....'  value={details}  onChange={e=>{setDetails(e.target.value)}}
            className="text-2xl py-1 px-3 outline-none border-b-4 focus:border-b-blue-400 resize-none"
         >
        
           
        
        </textarea>
        <button
      className="text-2xl py-1 px-3 outline-none border-4 bg-blue-400 text-white hover:border-blue-700 hover:bg-blue-700 "
        >
          Create</button>

        

   </form>
    </article>
  )
}

export default AddTodo;
