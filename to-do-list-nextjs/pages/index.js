import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  useEffect(() => {
    async function fetchTodos() {
      const res = await axios.get('/api/todos');
      setTodos(res.data);
    }

    fetchTodos();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    const res = await axios.post('/api/todos', { task });
    setTodos(res.data);
    setTask('');
  }

  return (
    <div>
      <h1>To-Do App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={e => setTask(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>
    </div>
  );
}

