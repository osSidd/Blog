import { useRef } from "react";
import useUserContext from "../user/useUserContext";
import useCommentContext from '../comments/useCommentContext'

export default function useCommentForm(id){
    
    const commentRef = useRef()
    const {user} = useUserContext()
    const {dispatch} = useCommentContext()

    async function addComment(e){
        e.preventDefault()
        try{
            const response = await fetch(`${import.meta.env.VITE_URL}/api/comments`, {
                method:'POST',
                credentials:'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({body: commentRef.current.value, author: user, blog: id})
            })

            if(response.ok){
                const data = await response.json()
                dispatch({
                    type: 'ADD_COMMENT',
                    payload: data,
                })

            }
        }catch(err){
            console.log(err.message)
        }
    }

    return {
        commentRef,
        addComment
    }
}