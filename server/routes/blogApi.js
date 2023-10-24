const express = require('express')
const router = express.Router()

const {
    getAllBlogs,
    getABlog,
    postNewBlog,
    updateABlog,
    deleteABlog
} = require('../controllers/blogsController')

//get all blogs
router.get('/blogs', getAllBlogs);

//get a blog
router.get('/blogs/:id', getABlog);

//post a new blog
router.post('/blogs', postNewBlog);

//patch a blog
router.patch('/blogs/:id', updateABlog);

//delete a blog
router.delete('/blogs/:id', deleteABlog);

module.exports = router