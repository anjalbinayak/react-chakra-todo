import express from 'express';
import {
  getTodos,
  deleteTodo,
  addTodo,
  setTodoAsComplete,
  setTodoAsIncomplete,
} from '../controllers/todoControllers.js';

const router = express.Router();

router.route('/').get(getTodos).post(addTodo);
router.route('/:id').delete(deleteTodo);
router.route('/complete/:id').put(setTodoAsComplete);
router.route('/incomplete/:id').put(setTodoAsIncomplete);

export default router;
