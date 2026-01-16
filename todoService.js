const Todo = require("../models/todoModel.js");

exports.getTodos = () => Todo.find();

exports.createTodo = (data) => Todo.create(data);

exports.updateTodo = (id, data) =>
  Todo.findByIdAndUpdate(id, data, { new: true });

exports.deleteTodo = (id) =>
  Todo.findByIdAndDelete(id);

exports.searchTodos = (query) =>
  Todo.find({ title: { $regex: query, $options: "i" } });
