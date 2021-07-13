import express from 'express';
import {
  getTodos,
  deleteTodo,
  addTodo,
  toggleStatus,
} from '../controllers/todoControllers.js';

const router = express.Router();

router.route('/').get(getTodos).post(addTodo);
router.route('/:id').delete(deleteTodo);
router.route('/setStatus/:id').put(toggleStatus);

export default router;
