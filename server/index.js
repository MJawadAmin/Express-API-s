require('dotenv').config(); // Load environment variables

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/User");


const app = express();

// Middleware
app.use(cors());
app.use(express.json());

const dbURI = process.env.dbURI;
const PORT = process.env.PORT;

mongoose.connect(dbURI)
    .then(() => console.log("Database connected successfully"))
    .catch(err => console.error("Database connection error:", err));

app.post('/createUser', async (req , res )=>{
    try{
        const {name , email , age }= req.body;
        const newUser = new UserModel({
            name : name ,
            email : email ,
            age : age 
        })
        await newUser.save()
        res.status(200).json({
            status :'connected ',
            message : ' success'
        })
    }catch (err){
        console.log(err);
        res.status(200).json({
            status : 'failed ',
            message : 'Server Issue '
        })
    }
})

app.post('/updateUser', async (req , res )=>{
    try{
        const {name , email , age , userId }= req.body;
        const user= await UserModel.findById(userId);
        if (!user){
            res.status(200).json({
                status:' Failed',
                message: ' user not found '
            })
            
        }else{
            user.email= email ;
            user.age = age ;
            user.name = name ;
        }
        await user.save()
        res.status(200).json({
            status: ' succes',
            message : 'updated'

        })

    }catch (err){
        console.log(err);
        res.status(200).json({
            status : 'failed ',
            message : 'Server Issue '
        })
    }
})
app.delete('/deleteUser', async (req , res )=>{
    try{
        const {name , email , age }= req.body;
        const newUser = new UserModel({
            name : name ,
            email : email ,
            age : age 
        })
        await newUser.findByIdAndDelete()
        res.status(200).json({
            status :'connected ',
            message : ' success'
        })
    }catch (err){
        console.log(err);
        res.status(200).json({
            status : 'failed ',
            message : 'Server Issue '
        })
    }
})
app.listen(3000 , ()=>{
    console.log(`Server Connected Succesfully at ${PORT}`)
})