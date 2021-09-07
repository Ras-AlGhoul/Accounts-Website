const express = require('express');
const User = require('./db/models/user');
require('./db/mongoose');
const user = require('./db/models/user');
const Task = require('./db/models/task');
// const router = require('./routes/router');
const app = express();
const port = process.env.Port || 3000;

app.use(express.json());

app.post('/users', (req, res) => {
    const user = new User(req.body)
    user.save().then(() =>
         res.send(user))
        .catch(e => res.statusCode(400).send(e));
});
app.post('/tasks',(req,res)=>{
    const task = new Task(req.body)
    task.save().then(()=>{
        res.send(task);
    }).catch(e => res.statusCode(400).send(e));

});

app.get('/users', (req,res)=>{
    User.find({}).then(users => res.send(users))
    .catch(e => res.statusCode(500).send(e));
});

app.get('/users/:id', (req,res)=>{
    const _id = req.params.id;
    User.findById(_id).then(user =>{
        if(!user){
            return res.statusCode(404).send();
        }
        res.send(user);
    }).catch(e=> res.statusCode(500).send(e))
});

app.get('/tasks', (req,res)=>{
    Task.find({}).then(tasks => res.send(tasks))
    .catch(e => res.statusCode(500).send(e))
});

app.get('/tasks/:id',(req,res)=>{
    const _id = req.params.id; 
    Task.findById(_id).then(task =>{
        if(!task){
         return res.statusCode(404).send();
        }
        res.send(task)
    }).catch(e=>res.statusCode(500).send(e))
});

app.listen(port, () => {
    console.log('app is up and runing' + port);
})