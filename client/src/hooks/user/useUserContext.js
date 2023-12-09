import { useContext } from "react";
import {UserContext} from '../../context/userContext'

export default function useUserContext(){
    const {user, dispatch} = useContext(UserContext)
    
    return {user, dispatch}    
}