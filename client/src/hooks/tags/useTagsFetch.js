import {useEffect} from 'react' 

import useTagContext from './useTagContext'

export default function useTagsFetch(){

    const {tags, dispatch} = useTagContext()

    useEffect(() => {
        const abortController = new AbortController()
        const signal = abortController.signal

        async function fetchTags(){
            try{
                const res = await fetch(`http://localhost:3000/api/tags`, {signal})
                if(!signal.aborted){
                    if(res.ok){
                        const data = await res.json()
                        dispatch({
                            type: 'SET_ALL_TAGS',
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

        fetchTags()
        
        return () => {
            abortController.abort();
        }
    }, [])

    return {tags}
}