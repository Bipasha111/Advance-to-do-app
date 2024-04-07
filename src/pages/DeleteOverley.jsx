import  { React,useContext } from "react";
import { TodoStore } from "../context/TodoContext";


const DeleteOverley = () => {

    const {deletetodo,showDeleteOverley,handleDeleteTodo,setShowreadoverlay,setDeletetodo,setShowDeleteOverley} = useContext(TodoStore);


  return (
<>

{showDeleteOverley && (<section  
 className="h-[100vh] w-[100vw]  bg-[#000a] fixed top-0 left-0 ">

    <article  className="w-[100%] flex justify-center items-center h-[90%]">
 
     <div className="bg-white w-[80%] p-5 rounded-lg flex flex-col">
        <p  className="text-lg font-semibold">this is parmently delete?</p>

      <div className="flex justify-end gap-5">
      <button
      onClick={()=>{handleDeleteTodo(deletetodo)}}
       className="text-lg bg-red-600 text-white py-1 px-3 rounded-lg hover:bg-red-800">Delete</button>


      <button
      onClick={()=>{
        setShowDeleteOverley(false);
        setShowreadoverlay(false);
        
      }}
      className="text-lg bg-emerald-500 text-white py-1 px-3 rounded-lg hover:bg-emerald-800">No</button>
      </div>
     </div>

    </article>
</section>
)}

</>
  )
}

export default DeleteOverley
