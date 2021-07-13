import Todo from '../models/todoModel.js';

export const getTodos = async (req, res, next) => {
  const todos = await Todo.find({});
  res.json(todos);
};

export const addTodo = async (req, res) => {
  const todo = new Todo(req.body);

  const newTodo = await todo.save();

  res.status(201).json(newTodo);
};

export const deleteTodo = async (req, res, next) => {
  const todo = await Todo.findById(req.params.id);

  if (todo) {
    await todo.remove();
    res.json({ message: 'Todo removed' });
  } else {
    res.status(404).json({ message: 'Todo not found' });
  }
};

export const setTodoAsComplete = async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  if (todo) {
    todo.status = true;
    const updatedTodo = await todo.save();
    res.status(200).json(updatedTodo);
  } else {
    res.status(404).json({ message: 'Todo not found' });
  }
};

export const setTodoAsIncomplete = async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  if (todo) {
    todo.status = false;
    const updatedTodo = await todo.save();
    res.status(200).json(updatedTodo);
  } else {
    res.status(404).json({ message: 'Todo not found' });
  }
};
