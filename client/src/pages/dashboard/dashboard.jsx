import { useEffect, useState } from "react"
import UserCard from "../../components/userCard/userCard"
import './dashboard.css'

export default function Dashboard(){

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/', {mode:'cors'})
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    return(
        <div className="dashboard">
            {users.length ? users.map(user => (
                <UserCard user={user} />
            )) : <div>No Data Found</div>}
            <div className="add-user">
                <span>&#43;</span>
            </div>
        </div>
    )
}