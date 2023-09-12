import { Router } from "express";
import { Todo } from "../model/todo";

const router = Router();

let todos: Todo[] = [];

router.get("/", (req, res, next) => {
  res.status(200).json({ todos: todos });
});

router.post("/todo", (req, res, next) => {
  const newTodo: Todo = {
    id: new Date().toISOString(),
    text: req.body.text,
  };
  todos.push(newTodo);
  res.status(201).json({ message: "Added Todo", todos: todos });
});

router.put("/todo/:todoId", (req, res, next) => {
  const tid = req.params.todoId;
  const todoIndex = todos.findIndex((item) => item.id === tid);
  if (todoIndex) {
    todos[todoIndex] = { id: todos[todoIndex].id, text: req.body.text };
    return res.status(200).json({ message: "Todo updated", todos });
  }
  res.status(404).json({ message: "cound not find todo" });
});

router.delete("/todo/:todoId", (req, res, next) => {
  todos = todos.filter((item) => item.id !== req.params.todoId);
  res.status(200).json({ message: "todo deleted", todos });
});

export default router;