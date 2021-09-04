const express = require('express');
// const router = require('./routes/router');
const app = express();
const router = express.Router();
const port = process.env.Port || 3000;

app.post('/users', (req,res)=>{
    res.send('test!!')
})

app.listen(port,()=>{
    console.log('app is up and runing' + port);
})