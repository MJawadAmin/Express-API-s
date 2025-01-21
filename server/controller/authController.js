


// Imports 
const UserModel = require('../models/User');


// Apiss




// Create User 
exports.createUser = async (req, res) => {
    try{
        const {name, email, password } = req.body;

        const newUser = new UserModel({
            name: name,
            email: email,
            password: password
        });

        await newUser.save();

        return res.status(200).json({
            status: 'success',
            message: 'User added succesfuly!'
        })
    }catch(error){
        return res.status(200).json({
            status: 'failed',
            message: 'Internal Server Error!'
        })
    }
}





// // Update User 
// exports.updateUser = async (req, res) => {
//     try{
//         const { userId, newName, newEmail, newPassword } = req.body;


//         const user = await UserModel.findById(userId);

//         if(!user){
//             return res.status(200).json({
//                 status: 'failed',
//                 message: 'User not found!'
//             })  
//         }

//         user.name =newName;

//         user.email = newEmail;

//         user.password =  newPassword;


//         await user.save();

//         return res.status(200).json({
//             status: 'success',
//             message: 'User updated succesfuly!'
//         })
//     }catch(error){
//         return res.status(200).json({
//             status: 'failed',
//             message: 'Internal Server Error!'
//         })
//     }
// }

// // Fetch User 
// exports.updateUser = async (req, res) => {
//     try{
//         const { userId, newName, newEmail, newPassword } = req.body;


//         const user = await UserModel.findById(userId);

//         if(!user){
//             return res.status(200).json({
//                 status: 'failed',
//                 message: 'User not found!'
//             })  
//         }

//         user.name =newName;

//         user.email = newEmail;

//         user.password =  newPassword;


//         await user.save();

//         return res.status(200).json({
//             status: 'success',
//             message: 'User updated succesfuly!'
//         })
//     }catch(error){
//         return res.status(200).json({
//             status: 'failed',
//             message: 'Internal Server Error!'
//         })
//     }
// }


// // Delete User



// // frontend request name, email pass

// // create onject 


// // save 

// // returen res 



// // function 

// // define variable 







// exports.updateUser = async (req,res) => {
//     try{

//     }catch(error){
//         return res.status(200).json({
//             mess: 'jawad',
//             laptop: 'dell',
//         })
//     }
// }
