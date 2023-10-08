import { Children, createContext } from "react"

const UserContext = createContext()

export default function UserContextProvider(){
    return(
        <UserContext.Provider>
            {Children}
        </UserContext.Provider>
    )
}