const express = require('express');
const app = express();

app.get('/tasks', (req, res) => {
  res.json([{ id: 1, task: 'Complete CI/CD pipeline' }]);
});

app.listen(3002, () => {
  console.log('Task service listening on port 3002');
});

