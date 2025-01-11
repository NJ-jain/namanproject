const express = require('express');
const app = express();
require('dotenv').config()
const connectDB = require('./database/connectDB')
const cors = require('cors')
const cookie_parser = require('cookie-parser')

const userRouter = require('../routes/user')


connectDB();

app.use(cors('http://localhost:3000'))
app.use(cookie_parser())
app.use(express.json());

app.get('/', (req, res)=>{
    res.send("Hello World");
})

app.use('/user', userRouter);


app.listen(process.env.PORT, ()=>{
    console.log(`Server is live at http://localhost:${process.env.PORT}`)
})