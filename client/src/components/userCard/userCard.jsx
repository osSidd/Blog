import { redirect, useNavigate } from 'react-router-dom'
import './userCard.css'

export default function UserCard({user}){

    const navigate = useNavigate()

    function displayUser(){
        navigate(`/id=${user._id}`)
    }

    function editUser(){
        
    }

    function deleteUser(){
        fetch('http://localhost:3000/id='+user._id, {
            mode: 'cors',
            method: 'delete'
        })
            .then(res => {
                if(res.ok)
                    redirect('/')
            })
    }

    return(
        <div key={user._id} className="user-card" onClick={displayUser}>
            <div>
                <div className="username">{user.username}</div>
                <div className="email">{user.email}</div>
                <div className="phone">{user.phone}</div>
            </div>
            <div className='icon-container'>
                <span className="icon" onClick={editUser}><i className='fa fa-pencil'></i></span>
                <span className="icon" onClick={deleteUser}><i className='fa fa-trash'></i></span>
            </div>
        </div>
    )
}