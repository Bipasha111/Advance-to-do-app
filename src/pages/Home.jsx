import React, { useContext } from 'react'
import AddTodo from '../compnent/AddTodo'
import { TodoStore } from '../context/TodoContext'

import ShowAllTodos from '../compnent/ShowAllTodos';
import ReadOverley from './ReadOverley';
import DeleteOverley from './DeleteOverley';





const Home = () => {

 
  const { todolist }= useContext(TodoStore);
  console.log( todolist );
  return (
  
     

     
      <>
      <AddTodo></AddTodo>
      
      <ReadOverley/>
      <ShowAllTodos>
      </ShowAllTodos>
      <DeleteOverley/>
    
      
      </>
      
      
       
     
  )
}

export default Home
