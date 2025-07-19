import express from 'express';
import usersRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());

// Routes
app.use('/users', usersRoutes);

// Root Route
app.get('/', (req, res) => {
  res.send('Hello from the home page!');
});

// 404 Handler
app.use((req, res) => {
  res.status(404).send({ error: 'Route not found' });
});

// Server Listen
app.listen(PORT, () => {
  console.log(`Server running on port: http://localhost:${PORT}`);
});
