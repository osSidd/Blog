import { Box, Button, Heading, Text, useColorMode } from "@chakra-ui/react";
import {AddIcon, SunIcon, MoonIcon} from '@chakra-ui/icons'

import { Link, useNavigate } from "react-router-dom";

import useUserContext from '../hooks/user/useUserContext'
import useLogout from "../hooks/user/useLogout";

export default function Navbar(){
    
    const {colorMode, toggleColorMode} = useColorMode()
    const {user} = useUserContext()
    const {logout} = useLogout()
    const navigate = useNavigate()

    function handleNavigation(path){
        navigate(path)
    }

    return (
        <Box px={14} w={{base:'90%', md:'100%'}} display='flex' alignItems='center' justifyContent='space-between'>
            <Link to='/'><Heading as='h1' size='2xl'>Os&apos; writings</Heading></Link>
            { user && <Button 
                colorScheme='gray'
                fontSize={18}
                ml='auto'
                onClick={() =>  handleNavigation('/blogs/create')}
                rightIcon={<AddIcon/>}
            >
                Compose post
            </Button>}
            <Button bg='transparent' outline='none' border='none' _hover={{bg:'transparent'}} ml='auto' mr={4} onClick={toggleColorMode}>
                {
                    colorMode === 'light' ? <SunIcon/> : <MoonIcon/>
                }
            </Button>
            {
                user ? 
                <Box display='flex' alignItems='center'>
                    <Text>{user}</Text>
                    <Button ml={8} variant='link' color='red.400' onClick={logout}>Logout</Button>
                </Box> : 
                <Box>
                    <Button mr={4} variant='link' colorScheme='blue' onClick={() => handleNavigation('/users/signup')}>
                        create account
                    </Button>
                    <Button variant='link' colorScheme='blue' onClick={() => handleNavigation('/users/login')}>
                        log in
                    </Button>
                </Box>
            }
        </Box>
    )
}