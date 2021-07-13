import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
  name: String,
  status: { type: Boolean, default: false },
  date: { type: Date, default: Date.now() },
});

const Todo = mongoose.model('Todo', todoSchema);

export default Todo;
