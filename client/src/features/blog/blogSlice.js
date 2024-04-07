const initialState = {
    blogs: [],
    blog: {}
}

export default function blogReducer(state=initialState, action){
    switch(action.type){
        case 'blogs/SET_ALL_BLOGS':
            return {
                ...state,
                blogs: action.payload,
            }
        case 'blogs/SET_A_BLOG':
            return {
                ...state,
                blog: action.payload,
            }
        case 'blogs/ADD_COMMENT':
            return {
                ...state,
                blog: {...state.blog, comments: [...state.blog.comments, action.payload]}
            }
        case 'blogs/DELETE_COMMENT':
            return {
                ...state,
                blog: {...state.blog, comments: state.blog.comments.filter(cmt => cmt._id !== action.payload)}
            }
        default:
            return state
    }
}

export const setBlogs = blogs => ({
    type: 'blogs/SET_ALL_BLOGS',
    payload: blogs,
})

export function loadBlogs(){
    return async function(dispatch){
    try{
        // const response = await fetch(`${import.meta.env.VITE_URL}/api/blogs`, {signal})
        const response = await fetch(`${import.meta.env.VITE_URL}/api/blogs`)

        // if(!signal.aborted){
            if(response.ok){
                const data = await response.json()
                // console.log(data)
                dispatch(setBlogs(data))
            }
        // }
        else{
            console.error(`Http error! Status:${response.status}`)
        }                
    }catch(err){
        // if(!signal.aborted){
            console.log(err.message)
        // }
    }
}
}

export function fetchBlog(id){
    return async function (dispatch){
        try{
            // const response = await fetch(`${import.meta.env.VITE_URL}/api/blogs`, {signal})
            const response = await fetch(`${import.meta.env.VITE_URL}/api/blogs/${id}`)

            // if(!signal.aborted){
                if(response.ok){
                    const data = await response.json()
                    // console.log(data)
                    dispatch({
                        type: 'blogs/SET_A_BLOG',
                        payload: data
                    })
                    // console.log(getState())
                    console.log('hi')
                }
            // }
            else{
                console.error(`Http error! Status:${response.status}`)
            }                
        }catch(err){
            // if(!signal.aborted){
                console.log(err.message)
            // }
        }
    }
}