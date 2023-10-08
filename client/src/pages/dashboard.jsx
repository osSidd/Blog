import { useEffect, useState } from "react"

export default function Dashboard(){

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/', {mode:'cors'})
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])


    return(
        <div>
            {users.length ? users.map(user => (
                <div key={user.id}>
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.phone}</p>
                    <div><i className='fa fa-pencil'></i></div>
                    <div><i className='fa fa-trash'></i></div>
                    <hr/>
                </div>
            )) : <div>Fetching data...</div>}
        </div>
    )
}