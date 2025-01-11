import express from 'express';
import connectDB from './database/connectDB.js'; 
const app = express();

app.get('/', (req, res) => {
  const name = process.env.NAME || 'World';
  res.send(`Hello ${name}!`);
});

const port = parseInt(process.env.PORT) || 3000;

connectDB();

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});