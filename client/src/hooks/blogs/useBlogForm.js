import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import useBlogContext from "./useBlogContext";
import useTagContext from "../tags/useTagContext";

export default function useBlogForm(id){
    
    const [formData, setFormData] = useState({
        title: '',
        snippet: '',
        tags: [],
    })

    const {state} = useBlogContext()
    const {tags, dispatch} = useTagContext()

    const messageRef = useRef('')
    const keywordRef = useRef('')
    const navigate = useNavigate()

    function handleChange(e){
        const {name, value} = e.target

        setFormData(prev => ({
            ...prev,
            [name] : value
        }))
    }

    function selectTags(id){
        dispatch({
            type: 'SELECT_A_TAG',
            payload: id
        })
        setFormData(prev => ({...prev, tags: [...prev.tags, id]}))
    }

    async function handleSubmit(e){
        e.preventDefault()
        const url = id ? `${import.meta.env.VITE_URL}/api/blogs/${id}` : `${import.meta.env.VITE_URL}/api/blogs`
        try{
            const response = await fetch(url, {
                credentials: "include",
                headers:{
                    "Content-Type": "application/json"
                },
                method: id ? 'PATCH' : 'POST',
                body:JSON.stringify({...formData, body: messageRef.current.value})
            })
    
            if(response.ok){
                navigate('/')
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

    return {
        formData,
        messageRef,
        keywordRef,
        tags,
        handleChange,
        handleSubmit,
        selectTags,
    }
}