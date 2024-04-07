import {createContext, useState, } from "react";

export const TodoStore=createContext([]);


 const TodoContext = ({ children }) => {

  // const [todolist,setTodolist] = useState([]);

 const [showreadoverlay,setShowreadoverlay] =useState(false);
 const [showtodoData,setshowtodoData] =useState({});

 //to handle delete 
 const [showDeleteOverley,setShowDeleteOverley] =useState(false);
 const [deletetodo,setDeletetodo] =useState(false) ;

 //to update
 const [showupdateoverlay, setShowupdateOverlay] = useState(false);
 const [updatetodo, setUpdateTodo] = useState(false);

  
  const [todolist,setTodolist] = useState([
    // {
    //   id,
    //   title,
    //   details,
    //   n_characters,
    //   n_words,
    //   n_sentences,
    //   createdAt: `Date : ${new Date().toLocaleDateString()} Time : ${new Date().toLocaleTimeString()}`,
    //   updateAt: null,
    // },

  ]);
  

  const handleAddTodo = ({title,details,n_characters,n_words,n_sentence}) => {
    console.log(title,details,n_characters,n_sentence);
    
    setTodolist([
      ...todolist,
      {
        id: `${new Date()}`,
        title,
        details,
        n_characters,
        n_words,
        n_sentence,
        createdAt: `Date : ${new Date().toLocaleDateString()} Time : ${new Date().toLocaleTimeString()}`,
      },
    ]);
  };

  
  const handleReadTodo=()=>{};
  

  const handleReadOverley=id=>{
    console.log("id is"+id);
    const data = todolist.filter(value=>value.id===id);
    setshowtodoData({...data[0]});  
  };



  const handleDeleteTodo = id => {
    console.log("handleDeleteTodo id : ", id);
    setTodolist(
      todolist.filter(value => {
        if (value.id != id) console.log("delete ", value.title);

        return value.id != id;
      })
    );
    setShowDeleteOverley(false);
    setShowreadoverlay(false);
  };

  
  return (
  <TodoStore.Provider value={
    {todolist,
    handleAddTodo,
    handleReadOverley,

    showtodoData,
    setshowtodoData,

    showreadoverlay,
    setShowreadoverlay,

    deletetodo,
    setDeletetodo,

    showDeleteOverley,
    setShowDeleteOverley,

    handleDeleteTodo,

    showupdateoverlay,
    setShowupdateOverlay,

    updatetodo, 
    setUpdateTodo,
    
    }}>
    {children}
  </TodoStore.Provider>
   
  );
}

export default TodoContext;


