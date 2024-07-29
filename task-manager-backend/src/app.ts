import express from 'express';
import bodyParser from 'body-parser';
import taskRoutes from './routes/taskRoutes';
import mongoose from 'mongoose';

const app = express();

app.use(bodyParser.json());

app.use('/api', taskRoutes);

mongoose.connect('mongodb://localhost:27017/taskmanager', {

}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB', err);
});

export default app;
