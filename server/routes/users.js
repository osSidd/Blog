var express = require('express');
var router = express.Router();

const {
  getAllUsers,
  getUser,
  userSignup,
  deleteUser,
  editUser
} = require('../controllers/userController')

// //get all users
// router.get('/', getAllUsers);

// //get a user
// router.get('/:id', getUser);

// //post a new user
// router.post('/', postUser);

// //patch a user
// router.patch('/:id', editUser);

// //delete a user
// router.delete('/:id', deleteUser);

//for user login
router.post('/login', () => {})

//for user signup
router.post('/signup', userSignup)

module.exports = router;
