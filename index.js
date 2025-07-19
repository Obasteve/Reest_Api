import express from 'express';
import bodyParser from 'body-parser'
import usersRoutes from './routes/users.js'

const app = express();
const PORT = 5000;

app.use(express.json()); // required for JSON body parsing

app.use('/users', usersRoutes); 

app.get('/', (req, res) => {
  res.send('Hello from the home page!');
});

app.listen(PORT, () => {
  console.log(`Server running on port: http://localhost:${PORT}`);
});
