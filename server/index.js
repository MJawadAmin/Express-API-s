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
       return  res.status(200).json({
            status :'connected ',
            message : 'user createdd success'
        })
    }catch (err){
        console.log(err);
       return  res.status(200).json({
            status : 'failed ',
            message : 'Server Issue '
        })
    }
})

app.put('/updateUser', async (req , res )=>{
    try{
        const {name , email , age , userId }= req.body;
        const user= await UserModel.findById(userId);
        if (!user){
           return  res.status(200).json({
                status:' Failed',
                message: ' user not found '
            })
            
        }else{
            user.email= email ;
            user.age = age ;
            user.name = name ;
        }
        await user.save()
       return  res.status(200).json({
            status: ' succes',
            message : 'updated succesfully'

        })

    }catch (err){
        console.log(err);
       return  res.status(200).json({
            status : 'failed ',
            message : 'Server Issue '
        })
    }
})
app.delete('/deleteUser', async (req , res )=>{
    try{
        const {userId}= req.body;
        const user= await UserModel.findById(userId)
        if (!user){
            return res.status(200).json({
                status: "failed",
                message :"deleted Succesfully"
            })
        }
        await UserModel.findByIdAndDelete(userId)
       return  res.status(200).json({
            status :'success ',
            message : 'user deleted Success'
        })
    }catch (err){
        console.log(err);
       return  res.status(200).json({
            status : 'failed ',
            message : 'Server Issue '
        })
    }
})


app.get('/fetchUser', async  (req, res )=>{
    try{ 
        const Users= await UserModel.find();
        if (!Users){
          return res.status(200).json({
                status :" Failed ",
                message : "user not found "
            })
        }    
      return res.status(200).json({
            status: "Success",
            message: " Users Found ",
            Users: Users
        })
    }catch (err){
        console.log(err)
         return res.status(200).json({
            status : " Failed",
            message : " Server issue"
        })

    }
})


app.listen(3000 , ()=>{
    console.log(`Server Connected Succesfully at ${PORT}`)
})

app.get('/', (req, res) => {
    return res.send({
        mess: 'I am ok!'
    })
})