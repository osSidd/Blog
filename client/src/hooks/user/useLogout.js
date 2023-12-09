import useUserContext from "./useUserContext"

export default function useLogout(){
    
    const {dispatch} = useUserContext()
    
    async function logout(){
        try{
            const response = await fetch('http://localhost:3000/users/logout', {
                credentials: 'include'
            })

            if(response.ok){
                const data = await response.json()
                dispatch({
                    type: 'USER_LOG_OUT',
                })
            }
        }catch(err){
            console.log(err.message)
        }
    }

    return {logout}
}