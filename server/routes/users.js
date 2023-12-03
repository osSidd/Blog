var express = require('express');
var router = express.Router();

const {
  getAllUsers,
  userLogin,
  userSignup,
  deleteUser,
  editUser
} = require('../controllers/userController')

//get all users
router.get('/', getAllUsers);

//edit a user
router.patch('/:id', editUser);

//delete a user
router.delete('/:id', deleteUser);

//for user login
router.post('/login', userLogin)

//for user signup
router.post('/signup', userSignup)

module.exports = router;
