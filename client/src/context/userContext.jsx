import { createContext, useReducer } from "react"

const UserContext = createContext()

export const userReducer = (state, action) => {
    switch(action.type){
        case 'SET_USERS':
            return action.payload
    }
}

export default function UserContextProvider({children}){

    const [state, dispatch] = useReducer(userReducer, {
        users: []
    })

    return(
        <UserContext.Provider value={{state, dispatch}}>
            {children}
        </UserContext.Provider>
    )
}