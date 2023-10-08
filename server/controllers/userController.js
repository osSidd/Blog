const users = [
    {id:0, username: 'Kevin@234', email: 'kevin123@abc.com', phone:393242332},
    {id:1, username: 'shaun@823', email: 'shaun123@abc.com', phone:928332332},
    {id:2, username: 'Luke@1211', email: 'luke123@abc.com', phone:543432332},
    {id:3, username: 'Michael@23', email: 'michael123@abc.com', phone:112112332},
    {id:4, username: 'Mathews@923', email: 'mathews123@abc.com', phone:783432332}
]

function getAllUsers(req, res, next){
    res.json(users)
}

function getUser(req,res,next){
    const id = parseInt(req.params.id)
    console.log(id)
    const user = users.find(user => user.id === id)
    res.json(user)
}

function postUser(req,res,next){
    const {username, email, phone} = req.body
    const user = {username,email,phone, id:23}
    users.push(user)
    const arr = users
    res.json(arr)
}

function deleteUser(req,res,next){
    const id = req.params.id
    const arr = users.filter(user => user.id !== parseInt(id))
    res.json(arr)
}

function editUser(req,res,next){
    const id = req.params.id
    const arr = users.map(user => {
        return user.id === parseInt(id) ? {...req.body} : user
    })
    res.json(arr)
}

module.exports = {getAllUsers, getUser, postUser, deleteUser, editUser}