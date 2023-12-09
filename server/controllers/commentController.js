const mongoose = require('mongoose')

const Comment = require('../models/comment')

//get all comments for a blog
const getAllComments = async (req, res, next) => {
    try{
        const id = req.params.id
        const comments = await Comment.find({blog: id})
        return res.status(200).json(comments)
    }catch(err){
        return res.status(400).json({error: err.message})
    }
}

//post a comment
const postComment = async (req, res, next) => {
    try{
        const comment = await Comment.create({...req.body})
        return res.status(200).json(comment)
    }catch(err){
        res.status(400).json({error: err.message})
    }
}

//update a comment
const updateComment = async (req, res, next) => {
    try{
        const id = req.params.id
        if(!mongoose.Types.ObjectId.isValid(id)) 
            return res.status(400).json({error: 'invalid comment id'})

        const comment = await Comment.findByIdAndUpdate(id, {...req.body})

        if(!comment) return res.status(404).json({error: 'commentnot found'})

        return res.status(200).json(comment)

    }catch(err){
        res.status(400).json({error: err.message})
    }
}

//add likes
const increaseLikes = async (req, res, next) => {
    try{
        const id = req.params.id
        if(!mongoose.Types.ObjectId.isValid(id)) 
            return res.status(400).json({error: 'invalid comment id'})

        const comment = await Comment.findByIdAndUpdate(id, {likes: {$inc: 1}})
        if(!comment) return res.status(404).json({error: 'comment not found'})

        return res.status(200).json(comment)

    }catch(err){
        return res.status(400).json({error: err.message})
    }
}

//delete a comment
const deleteComment = async (req, res, next) => {
    try{
        const id = req.params.id
        if(!mongoose.Types.ObjectId.isValid(id)) 
            return res.status(400).json({error: 'invalid comment id'})

        const comment = await Comment.findByIdAndDelete(id)

        if(!comment) return res.status(404).json({error: 'comment not found'})

        return res.status(200).json(comment)

    }catch(err){
        res.status(400).json({error: err.message})
    }
}

module.exports = {getAllComments, postComment, updateComment, increaseLikes, deleteComment}