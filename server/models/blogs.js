const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    // author:{
    //     type: String,
    //     required:true,
    // },
    snippet:{
        type:String,
        required:true,
    },
    keyword:{
        type: [String],
        validate: v => Array.isArray(v) && v.length > 0
    },
    body:{
        type:String,
        required:true,
    }
}, {timestamps:true})


module.exports = mongoose.model('Blog', BlogSchema)