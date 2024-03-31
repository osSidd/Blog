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