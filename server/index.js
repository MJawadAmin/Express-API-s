require('dotenv').config(); // Load environment variables

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/User");


const app = express();

// Middleware
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT;
const dbURI = process.env.dbURI;

mongoose.connect(dbURI)
    .then(() => console.log("Database connected successfully"))
    .catch(err => console.error("Database connection error:", err));

app.post('/createUser', async (req , res )=>{
    try{
        const {name , email , age }= req.body;
        const User = new UserModel({
            name : name ,
            email : email ,
            age : age 
        })
        await User.save()
        res.status(200).json({
            status :'connected ',
            message : ' success'
        })
    }catch (err){
        res.status(200).json({
            status : 'failed ',
            message : 'Server Issue '
        })
    }
})
app.listen(3000 , ()=>{
    console.log(`Server Connected Succesfully at ${PORT}`)
})