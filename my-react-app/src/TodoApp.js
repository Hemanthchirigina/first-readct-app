import React, { useState } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== '') {
      setTodos([...todos, task]);
      setTask('');
    }
  };

  const handleDelete = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Add a new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <div key={index}>
            <li>{todo}</li>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
