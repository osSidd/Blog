var express = require('express');
var router = express.Router();

const {getAllUsers, getUser, postUser, deleteUser, editUser} = require('../controllers/userController')

/* GET home page. */
router.get('/', getAllUsers);

router.get('/id=:id', getUser)

router.post('/', postUser)

router.delete('/id=:id', deleteUser)

router.patch('/id=:id', editUser)

module.exports = router;
