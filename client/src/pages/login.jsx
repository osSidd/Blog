import {Box, Button, Heading} from '@chakra-ui/react'
import {Link} from 'react-router-dom'

import FormControlElement from '../components/formControl'
import BackToBlogsBtn from '../components/backBtn'
import useLogin from '../hooks/useLogin'

export default function Login(){

    const {formData, handleChange, loginUser} = useLogin()

    return(
        <Box>
            <Box 
                w={{base: '90%', md:'4xl'}} 
                mx='auto' 
                display='flex' 
                flexDir='column' 
                alignItems='center' 
                justifyContent='center'
                color='#fefefe'
            >
                
            <Box alignSelf='flex-start'><BackToBlogsBtn/></Box>
                            
            <form style={{width: '75%'}} onSubmit={loginUser}>
                <Heading as='h1' textAlign='center'>Login</Heading>
                <FormControlElement
                    label='Email'
                    name='email'
                    type='email'
                    placeholder='Enter your Email address'
                    value={formData.email}
                    handleChange={handleChange}
                />
                <FormControlElement
                    label='Password'
                    name='password'
                    type='password'
                    placeholder='Enter a password'
                    value={formData.password}
                    handleChange={handleChange}
                />
                <Button 
                    mx='auto' 
                    colorScheme="yellow"
                    px={12}
                    display='block' 
                    mt={8}
                    type="submit"
                >
                    Login
                </Button>
                <Box 
                    textAlign='center' 
                    mt={2} 
                    color='gray.400' 
                    fontSize='sm'
                >
                    Not registered yet? &nbsp;
                    <Link to='/users/signup' style={{color:'white'}}>
                        Signup
                    </Link>
                </Box>
            </form>
            </Box>
        </Box>
    )
}