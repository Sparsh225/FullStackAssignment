import React from "react";
import TaskItem from "./TaskItem";

interface TaskListProps{
    tasks:Array<{
        _id:string
        title:string
        description:string
        status:string
    }>
    onEdit:(_id:string)=>void
    onDelete:(_id:string)=>void
}

const TaskList:React.FC<TaskListProps>=({tasks,onEdit,onDelete})=>{
    return (
        <div className="task-list">
            {
                tasks.map(task=>(<TaskItem key={task._id} onDelete={onDelete} onEdit={onEdit} task={task}  ></TaskItem>))
            }
        </div>
    )
}

export default TaskList