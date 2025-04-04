import React, { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/users')
      .then((res) => res.json())
      .then(setUsers);

    fetch('http://localhost:3002/tasks')
      .then((res) => res.json())
      .then(setTasks);
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>🚀 CI/CD Microservices App</h1>

      <h2>👤 Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <h2>📝 Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.task}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
