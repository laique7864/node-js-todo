import { Request, Response } from 'express';
import Todo from '../models/todoModel';

export const addTodo = async (req: Request, res: Response) => {
  try {
    const newTodo = new Todo(req.body);
    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
  } catch (error :any) {
    res.status(400).json({ message: error.message });
  }
};
export const getTodos = async (req: Request, res: Response) => {
    try {
      const todo = await Todo.find();
      console.log(todo);
      
      if (!todo) return res.status(404).json({ message: 'Todo not found' });
      res.json(todo);
    } catch (error :any) {
      res.status(500).json({ message: error.message });
    }
  };
export const getTodo = async (req: Request, res: Response) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) return res.status(404).json({ message: 'Todo not found' });
    res.json(todo);
  } catch (error :any) {
    res.status(500).json({ message: error.message });
  }
};

export const updateTodo = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedTodo) return res.status(404).json({ message: 'Todo not found' });
    res.json(updatedTodo);
  } catch (error :any) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteTodo = async (req: Request, res: Response) => {
  try {
    console.log(req.params.id);
    
    const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
    if (!deletedTodo) return res.status(404).json({ message: 'Todo not found' });
    res.status(204).json({ message: 'success' });
  } catch (error :any) {
    res.status(500).json({ message: error.message });
  }
};
