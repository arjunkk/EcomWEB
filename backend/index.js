const express = require('express');
require('./db/config');
const user = require('./db/user');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send("hellow");
})

app.post('/signup',async (req,res)=>{
    let data = new user(req.body);
    let result = await data.save();
    res.send(result);
})

app.listen(7000);