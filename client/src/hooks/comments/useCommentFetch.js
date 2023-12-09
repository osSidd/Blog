import { useEffect, useState } from "react"

export default function useCommentFetch(id){

    const [comments, setComments] = useState([])

    async function fetchComments(){
        try{
            const response = await fetch(`${import.meta.env.VITE_URL}/api/comments/${id}`)
            if(response.ok){
                const data = await response.json()
                setComments(data)
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