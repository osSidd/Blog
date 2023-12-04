import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import useUserContext from '../hooks/useUserContext'
import useLogout from "../hooks/useLogout";

export default function Navbar(){
    
    const {user} = useUserContext()
    const {logout} = useLogout()
    const navigate = useNavigate()

    function handleNavigation(path){
        navigate(path)
    }

    return (
        <Box w={{base:'90%', md:'4xl'}} display='flex' alignItems='center' justifyContent='space-between' mx='auto'>
            <Link to='/'><Heading as='h1' size='2xl'>Os' writings</Heading></Link>
            { user && <Button 
                colorScheme='teal'
                variant='outline' 
                fontSize={18}
                onClick={e =>  handleNavigation('/blogs/create')}
            >
                Add blog
            </Button>}
            {
                user ? 
                <Box display='flex' alignItems='center'>
                    <Text>{user}</Text>
                    <Button ml={8} variant='link' color='red.400' onClick={logout}>Logout</Button>
                </Box> : 
                <Box>
                    <Button mr={4} variant='link' colorScheme='blue' onClick={e => handleNavigation('/users/signup')}>
                        signup
                    </Button>
                    <Button variant='link' colorScheme='blue' onClick={e => handleNavigation('/users/login')}>
                        login
                    </Button>
                </Box>
            }
        </Box>
    )
}