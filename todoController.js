const todoService = require("../services/todoService");

exports.getTodos = async (req, res, next) => {
  try {
    const todos = await todoService.getTodos();
    res.json(todos);
  } catch (err) {
    next(err);
  }
};

exports.createTodo = async (req, res, next) => {
  try {
    const todo = await todoService.createTodo(req.body);
    res.status(201).json(todo);
  } catch (err) {
    next(err);
  }
};

exports.updateTodo = async (req, res, next) => {
  try {
    const todo = await todoService.updateTodo(req.params.id, req.body);
    res.json(todo);
  } catch (err) {
    next(err);
  }
};

exports.deleteTodo = async (req, res, next) => {
  try {
    await todoService.deleteTodo(req.params.id);
    res.json({ message: "Todo deleted" });
  } catch (err) {
    next(err);
  }
};

exports.searchTodos = async (req, res, next) => {
  try {
    const todos = await todoService.searchTodos(req.query.q);
    res.json(todos);
  } catch (err) {
    next(err);
  }
};
