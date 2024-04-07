import  { React,useContext } from "react";
import { TodoStore } from "../context/TodoContext";
import {MdOutlineDeleteForever} from "react-icons/Md";
import {BiSolidEdit} from "react-icons/Bi";



const ShowAllTodos = () => {

    const {todolist,handleReadOverley,setshowtodoData,showTodo,setShowreadoverlay,setDeletetodo,setShowDeleteOverley} = useContext(TodoStore);
    // console.log(todolist);
    
  return (
    
      <section className=" w-[100%] flex justify-center  items-center p-8"  onClick={()=>{setShowreadoverlay(true)}}>
        <article className="flex flex-wrap gap-6 w-[90%] ">

         { todolist.map(value=>{
             const {  id,
                      title,
                      details,
                      n_characters,
                      n_words,
                      n_sentences,
                      }=value;
            
               return<div className="flex flex-col w-[90%] lg:w-[25%] gap-6  hover:border-b-slate-500 p-4 border-slate-300 hover:border-blue-600 shadow-lg hover:shadow-xl rounded-md  group"
                onClick={()=>{handleReadOverley(id)}}>
                <h3 className="text-3xl bg-slate-200 rounded-md p-2 font-semibold text-center">{title}</h3>
                <p className="text-base bg-slate-200 p-2 text-ellipsis whitespace-nowrap overflow-hidden">{details}</p>

                <div className="group-hover:flex  gap-2 hidden ">
                <span className="text-center">Characters:{n_characters}</span>
                <span className="text-center">Words:{n_words}</span>
                <span className="text-center">Sentences:{n_sentences}</span>
                </div>

                <div className="flex justify-around  w-[100%]">
                <button
                 onClick={() => {
                  setShowDeleteOverley(true);
                  setDeletetodo(id);
                }}
                className="bg-red-500 p-2 rounded-lg hover:bg-red-700 "
                ><MdOutlineDeleteForever/></button>


                <button className="bg-yellow-500 p-2 rounded-lg hover:bg-yellow-700 "><BiSolidEdit/></button>
                </div>

      
               </div>
               
         }

         )};
   


    
       </article>
      </section>
    
  );
};

export default ShowAllTodos
