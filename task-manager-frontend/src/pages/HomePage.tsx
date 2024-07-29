import React, { useEffect, useState } from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import axios from 'axios';

const HomePage: React.FC = () => {
  const [tasks, setTasks] = useState<Array<{ _id: string; title: string; description: string; status: string }>>([]);
  const [currentTask, setCurrentTask] = useState<{ _id: string; title: string; description: string; status: string } | null>(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('/api/tasks');
      console.log('Fetched tasks:', response.data); // Debug log
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleSaveTask = async (task: { _id: string; title: string; description: string; status: string }) => {
    console.log('Saving task:', task); // Debug log
    if (task._id) {
      await axios.put(`/api/tasks/${task._id}`, task);
    } else {
      await axios.post('/api/tasks', task);
    }
    fetchTasks();
    setCurrentTask(null);
  };

  const handleEditTask = (_id: string) => {
    console.log('Editing task with _id:', _id); // Debug log
    const task = tasks.find(task => task._id === _id);
    if (task) {
      console.log('Found task to edit:', task); // Debug log
      setCurrentTask(task);
    } else {
      console.warn('No task found with _id:', _id); // Debug log
    }
  };

  const handleDeleteTask = async (_id: string) => {
    console.log('Deleting task with _id:', _id); // Debug log
    try {
      await axios.delete(`/api/tasks/${_id}`);
      fetchTasks();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className="home-page">
      <TaskForm task={currentTask || undefined} onSave={handleSaveTask} />
      <TaskList tasks={tasks} onEdit={handleEditTask} onDelete={handleDeleteTask} />
    </div>
  );
};

export default HomePage;
