import React from "react";

interface TaskItemProps{
    task:{
        _id:string
        title:string
        description:string
        status:string
    }
    onEdit:(_id:string)=>void;
    onDelete:(_id:string)=>void;
}

const TaskItem:React.FC<TaskItemProps>=({task,onDelete,onEdit})=>{
    return (
        <>
      
         <div className="task-item flex border-2 mt-1 ">
           <div className="flex  w-[90%]">
                <h3 className="font-semibold w-48 text-start">{task.title}</h3>
                <p className="flex flex-wrap w-1/2">{task.description}</p>
                <p>Status :{task.status}</p>
           </div>
            <div className=" flex  justify-end ">
            <button onClick={()=>{console.log(task._id);onEdit(task._id)}} className="border-2  px-6 bg-slate-400 ">Edit</button>
            <button onClick={()=>onDelete(task._id)}className="border-2 px-6 bg-red-500">Delete</button>
            </div>
        </div>
            
        </>
       
    )
}

export default TaskItem