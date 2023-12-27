import express from 'express';
import * as userController from '../controllers/todoController';

const router = express.Router();

// Define routes
router.post('/todo', userController.addTodo);
router.get('/todo/:id', userController.getTodo);
router.get('/todos', userController.getTodos);
router.put('/todo/:id', userController.updateTodo);
router.delete('/todo/:id', userController.deleteTodo)

export default router;
