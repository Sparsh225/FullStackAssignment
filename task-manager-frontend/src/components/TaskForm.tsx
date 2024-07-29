import React, { useState, useEffect } from 'react';

interface TaskFormTask {
  task?: {
    _id: string;
    title: string;
    description: string;
    status: string;
  };
  onSave: (task: { _id: string; title: string; description: string; status: string }) => void;
}

const TaskForm: React.FC<TaskFormTask> = ({ task, onSave }) => {
  const [title, setTitle] = useState(task ? task.title : '');
  const [description, setDescription] = useState(task ? task.description : '');
  const [status, setStatus] = useState(task ? task.status : 'To-Do');

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setStatus(task.status);
    }
  }, [task]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ _id: task ? task._id : '', title, description, status });
    setTitle('')
    setDescription('')
    setTitle('')
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <h1 className="text-xl font-semibold mb-2">Enter Title</h1>
      <input
        type="text"
        className="border-2 p-1 w-full"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <br />
      <h1 className="text-xl font-semibold mb-2">Enter Description</h1>
      <textarea
        placeholder="Description"
        className="border-2 w-full h-36"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <br />
      <div className="flex w-4/5 justify-between">
        <select value={status} className="border-2 w-1/2" onChange={(e) => setStatus(e.target.value)}>
          <option value="To-Do" className="bg-red-50">To-Do</option>
          <option value="In Progress" className="bg-yellow-50">In Progress</option>
          <option value="Done" className="bg-green-50">Done</option>
        </select>
        <button type="submit" className="border-2 p-2 px-10 bg-green-100">Save Task</button>
      </div>
    </form>
  );
};

export default TaskForm;
