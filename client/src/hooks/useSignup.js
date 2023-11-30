import { useNavigate } from "react-router-dom"
import { useState } from "react"

export default function useSignup(){

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        name:'',
        email: '',
        password: '',
        confirmPassword: '',
        username: '',
    })

    function handleChange(e){
        const {name, value} = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }))
    }

    async function signupUser(e){
        e.preventDefault()
        try{
            const response = await fetch('http://localhost:3000/users/signup', {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            if(response.ok){
                const data = await  response.json()
                console.log(data)
                navigate('/')
            }
        }catch(err){
            console.log(err)
        }
    }

    return {
        formData,
        handleChange,
        signupUser,
    }
}