import express from 'express';
import { createTask, deleteTask, getTasks, updateTask } from '../controllers/taskController';

const router = express.Router();

router.get('/tasks', (req, res, next) => {
  console.log('GET /tasks');
  next();
}, getTasks);

router.post('/tasks', (req, res, next) => {
  console.log('POST /tasks');
  next();
}, createTask);

router.put('/tasks/:id', (req, res, next) => {
  console.log(`PUT /tasks/${req.params.id}`);
  next();
}, updateTask);

router.delete('/tasks/:id', (req, res, next) => {
  console.log(`DELETE /tasks/${req.params.id}`);
  next();
}, deleteTask);

export default router;
