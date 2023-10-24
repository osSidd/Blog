import {useEffect} from 'react' 
import useBlogContext from './useBlogContext'

export default function useBlogFetch(id){

    const {state, dispatch} = useBlogContext()

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

    return {blog: state.blog}
}