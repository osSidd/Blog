const express = require('express')
const router = express.Router()

const {
    getAllBlogs,
    getABlog,
    postNewBlog,
    updateABlog,
    deleteABlog
} = require('../controllers/blogsController')

const auth = require('../middleware/auth')

//get all blogs
router.get('/blogs', getAllBlogs);

//get a blog
router.get('/blogs/:id', getABlog);

//post a new blog
router.post('/blogs', auth, postNewBlog);

//patch a blog
router.patch('/blogs/:id', auth, updateABlog);

//delete a blog
router.delete('/blogs/:id', auth, deleteABlog);

module.exports = router