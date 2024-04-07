import React from 'react'
import { useContext } from 'react'
import { TodoStore } from '../context/TodoContext'
import {MdOutlineDeleteForever} from "react-icons/Md";
import {BiSolidEdit} from "react-icons/Bi";
import ShowAllTodos from '../compnent/ShowAllTodos';

const Overley = () => {

     
    const {todolist,showTodo,showtodoData,setShowTodo,showreadoverlay,setShowreadoverlay} = useContext(TodoStore);
    console.log( " from overley"+todolist);
    console.log(showtodoData);

    const {
      id,
      title,
      details,
      n_characters,
      n_words,
      n_sentences,
      createdAt,
      
    }=showtodoData;


  return (<>
  {showreadoverlay && <section className='h-[100vh] w-[100vw]  bg-[#000a] fixed top-0 left-0'>

           <span
            className="text-white bg-black px-3  py-2 text-2xl fixed z-[5] top-7 right-7  cursor-pointer"
            onClick={() => setShowreadoverlay(false)}
          >
            X
          </span>


        <article className='w-[100%] flex justify-center items-center h-[90%]'>


        

        <div className="flex flex-col w-[90%]  h-[80%]  gap-[5vh] p-4 rounded-md border-slate-300 border-2 shadow-lg bg-white">
                <h3 className="text-3xl bg-slate-200 rounded-md p-2 font-semibold text-center">{title}</h3>
                <p className="text-2xl bg-slate-200 p-2 text-ellipsis whitespace-nowrap overflow-hidden h-[35vh]">{details}</p>

                <div className="flex  flex-col gap-8 justify-center items-center">
                <div className="text-2xl flex gap-3  ">
                  <span className="text-center">
                    Characters : {n_characters}
                  </span>
                  <span className="text-center">Words : {n_words}</span>
                  <span className="text-center">Sentences : {n_sentences}</span>
                </div>
              </div>
              <p className="text-slate-400 text-xl text-center">{createdAt}</p>
            </div>
               
               
        </article>
      
    </section>}
  
  </>
    
  )
}

export default Overley
