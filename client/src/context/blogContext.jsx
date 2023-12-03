import { createContext, useReducer } from "react";

export const BlogContext = createContext();

const reducer = (state, action) => {
    switch(action.type){
        case 'SET_ALL_BLOGS':
            return {
                ...state,
                blogs: action.payload,
            }
        case 'SET_A_BLOG':
            return {
                ...state,
                blog: action.payload,
            }
        default:
            return state
    }
}

export default function BlogContextProvider({children}){

    const [state, dispatch] = useReducer(reducer, {
        blogs:[],
        blog: {},
    })

    return(
        <BlogContext.Provider value={{state, dispatch}}>
            {children}
        </BlogContext.Provider>
    )
}