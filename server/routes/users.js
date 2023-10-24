var express = require('express');
var router = express.Router();

const {
  getAllUsers,
  getUser,
  postUser,
  deleteUser,
  editUser
} = require('../controllers/userController')

//get all users
router.get('/', getAllUsers);

//get a user
router.get('/:id', getUser);

//post a new user
router.post('/', postUser);

//patch a user
router.patch('/:id', editUser);

//delete a user
router.delete('/:id', deleteUser);

module.exports = router;
