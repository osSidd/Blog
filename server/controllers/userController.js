const { default: mongoose } = require('mongoose')
const User = require('../models/users')
const {v4: uuid} = require('uuid')

const Session = require('../models/session')

//get all users
async function getAllUsers(req, res, next){
    try{
        const users = await User.find()
        return res.status(200).json(users)
    }catch(err){
        return res.status(400).json({error: err.message})
    }
}

//log user in
async function userLogin(req,res,next){
    try{
              
        const user = await User.findOne(req.body)
        
        if(!user){
            return res.status(401).json({error: 'cannot find user'})
        }

        const session_token = uuid()

        const now = new Date()
        const expireTime = 1200
        const expiresAt = new Date(+now + expireTime * 1000)

        const session = await Session.create({username: user.username, expiresAt, token: session_token})
        
        res.cookie("session_token", session_token, {expires: expiresAt})
        return res.status(200).json({user: user.username, expireTime})

    }catch(err){
        return res.status(400).json({error: err.message})
    }
}

//create a new user
async function userSignup(req,res,next){
   try{
        const user = await User.create({...req.body})
        return res.status(201).json(user)
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

module.exports = {getAllUsers, userLogin, userSignup, deleteUser, editUser}