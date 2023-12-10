import { createContext, useReducer } from "react";

export const CommentContext = createContext()

function reducer(state, action){
    switch(action.type){
        case 'SET_COMMENTS':
            return {
                comments: action.payload
            }
        case 'ADD_COMMENT':
            return {
                comments: [...state.comments, action.payload]
            }
        default:
            return state
    }
}

export default function CommentContextProvider({children}){

    const [state, dispatch] = useReducer(reducer, {
        comments: []
    })

    return (
        <CommentContext.Provider value={{...state, dispatch}}>
            {children}
        </CommentContext.Provider>
    )
}