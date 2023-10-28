import {useEffect} from 'react' 
import useBlogContext from './useBlogContext'
import { useNavigate } from 'react-router-dom'

export default function useBlogFetch(id){

    const {state, dispatch} = useBlogContext()
    const navigate = useNavigate()

    useEffect(() => {
        const abortController = new AbortController()
        const signal = abortController.signal

        async function fetchBlogs(){
            try{
                const res = await fetch(`http://localhost:3000/api/blogs/${id}`, {signal})
                if(!signal.aborted){
                    if(res.ok){
                        const data = await res.json()
                        dispatch({
                            type: 'SET_A_BLOG',
                            payload: data
                        })
                    }
                }else{
                    console.error(`Http error! Status:${res.status}`)
                }                
            }catch(err){
                if(!signal.aborted){
                    console.log(err.message)
                }
            }
        }

        fetchBlogs()
        
        return () => {
            abortController.abort();
        }
    }, [])

    async function deleteBlog(){
        try{
            const response = await fetch(`http://localhost:3000/api/blogs/${id}`, {
                method: 'DELETE'
            })
    
            if(response.ok){
                const data = await response.json()
                navigate('/')
            }
        }catch(err){
            console.log(err.message)
        }
    }

    function editBlog(){
        navigate(`/blogs/${id}/edit`)
    }

    return {blog: state.blog, deleteBlog, editBlog}
}