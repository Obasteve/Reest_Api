// index.js
import express from 'express';
import usersRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(express.json()); // Enable JSON parsing

app.get('/', (req, res) => {
  res.send('Hello from the home page!');
});

app.use('/users', usersRoutes); //  Mount routes

// 404 handler
app.use((req, res) => {
  res.status(404).send('Route not found');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
