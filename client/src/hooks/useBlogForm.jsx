import { useEffect, useRef, useState } from "react";
import useBlogContext from "./useBlogContext";

export default function useBlogForm(id){
    
    const [formData, setFormData] = useState({
        title: '',
        snippet: ''
    })

    const {state} = useBlogContext()

    const messageRef = useRef('')

    function handleChange(e){
        const {name, value} = e.target

        setFormData(prev => ({
            ...prev,
            [name] : value
        }))
    }

    async function handleSubmit(e){
        e.preventDefault()
        const url = id ? `http://localhost:3000/api/blogs/${id}` : 'http://localhost:3000/api/blogs'
        try{
            const response = await fetch(url, {
                headers:{
                    "Content-Type": "application/json"
                },
                method: id ? 'PATCH' : 'POST',
                body:JSON.stringify({...formData, body: messageRef.current.value})
            })
    
            if(response.ok){
                const data = await response.json()
            }
        }catch(err){
            console.log(err.message)
        }
    }

    useEffect(() => {
        if(id){
            setFormData({
                title: state.blog.title,
                snippet: state.blog.snippet
            })
            if(messageRef.current){
                messageRef.current.value = state.blog.body ?? '' 
            }
        }
    }, [id])

    // console.log(id, state.blog)
    return {
        formData,
        messageRef,
        handleChange,
        handleSubmit,
    }
}