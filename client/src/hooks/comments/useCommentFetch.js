import { useEffect } from "react"
import useCommentContext from './useCommentContext'

export default function useCommentFetch(id){

    const {comments, dispatch} = useCommentContext()
    
    async function fetchComments(){
        try{
            const response = await fetch(`${import.meta.env.VITE_URL}/api/comments/${id}`)
            if(response.ok){
                const data = await response.json()
                dispatch({
                    type: 'SET_COMMENTS',
                    payload: data,
                })
            }
    
        }catch(err){
            console.log(err.message)
        }
    }

    useEffect(() => {
        fetchComments()
    }, [])

    return {
        comments
    }
}