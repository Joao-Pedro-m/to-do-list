import express from 'express';
import fs from 'fs';

const router = express.Router();

const readTodos = () => {
  fs.readFile('todos.json', 'utf8', (err, data) => {
    if (err) throw err;
    return JSON.parse(data);
  });

}


router.get('/api/todos', (req, res) => {
    res.send(readTodos());
});

router.post('/api/todos', (req, res) => {
    const newTodo = {
      id: Date.now(),
      task: req.body.task,
      done: false,
    };
    const todos = [...readTodos, newTodo ]
    fs.writeFile('todos.json', JSON.stringify(todos), 'utf8', err => {
      if (err) throw err;
    });
    res.send(readTodos)
});

