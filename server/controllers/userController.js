const { default: mongoose } = require('mongoose')
const User = require('../models/users')

//get all users
async function getAllUsers(req, res, next){
    try{
        const users = await User.find()
        return res.status(200).json(users)
    }catch(err){
        return res.status(400).json({error: err.message})
    }
}

//get a specific user
async function getUser(req,res,next){
    try{
        const id = req.params.id

        const isIdValid = mongoose.Types.ObjectId.isValid(id);
        if(!isIdValid) return res.status(400).json({error: "invalid id"});

        const user = await User.findById(id)
        
        if(!user){
            return res.status(404).json({error: 'cannot find user'})
        }
        return res.status(200).json(user)
    }catch(err){
        return res.status(400).json({error: err.message})
    }
}

//create a new user
async function postUser(req,res,next){
   try{
        const user = await User.create({...req.body})
        return res.status(200).json(user)
   }catch(err){
        return res.status(400).json({error: err.message})
   }
}

//delete a user
async function deleteUser(req,res,next){
   try{
        const id = req.params.id

        const isIdValid = mongoose.Types.ObjectId.isValid(id);
        if(!isIdValid) return res.status(400).json({error: "invalid id"});

        const user = await User.findByIdAndDelete(id)
        
        if(!user) return res.status(404).json({error: 'cannot find user'})
       
        return res.status(200).json(user)
   }catch(err){
        return res.status(400).json({error: err.message})
   }
}

//edit a user
async function editUser(req,res,next){
    try{
        const id = req.params.id

        const isIdValid = mongoose.Types.ObjectId.isValid(id)
        if(!isIdValid) return res.status(400).json({error: 'invalid id'})
        
        const user = await User.findByIdAndUpdate(id, {...req.body})
        if(!user){
            return res.status(404).jso({error: 'no user found'})
        }
        return res.status(200).json(user)
    }catch(err){
        return res.status(400).json({error: err.message})
    }
}

module.exports = {getAllUsers, getUser, postUser, deleteUser, editUser}