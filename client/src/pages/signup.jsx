import { Box, Heading, Button, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import BackToBlogsBtn from "../components/backBtn";
import FormControlElement from "../components/formControl";
import useSignup from "../hooks/useSignup";

export default function Signup(){

    const {formData, handleChange, signupUser} = useSignup()

    return(
        <Box color='#fefefe'>
            <Box 
                w={{base: '90%', md:'4xl'}} 
                mx='auto' 
                display='flex' 
                flexDir='column' 
                alignItems='center' 
                justifyContent='center'
            >
                
                <Box alignSelf='flex-start'><BackToBlogsBtn/></Box>
                
                <form style={{width: '75%'}} onSubmit={signupUser}>
                
                    <Heading textAlign='center' as='h1'>Signup</Heading>    
                
                    <FormControlElement
                        label='Full Name'
                        name='name'
                        placeholder='Enter your full name'
                        value={formData.name}
                        handleChange={handleChange}
                    />
                    <FormControlElement
                        label='Email'
                        name='email'
                        type='email'
                        placeholder='Enter your Email address'
                        value={formData.email}
                        handleChange={handleChange}
                    />
                    <FormControlElement
                        label='Username'
                        name='username'
                        placeholder='Enter your username'
                        value={formData.username}
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
                    <FormControlElement
                        label='Confirm password'
                        name='confirmPassword'
                        type='password'
                        placeholder='Confirm password'
                        value={formData.confirmPassword}
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
                        Signup
                    </Button>
                    <Box 
                        textAlign='center' 
                        mt={2} 
                        color='gray.400' 
                        fontSize='sm'
                    >
                        Already registered? &nbsp;
                        <Link to='/users/login' style={{color:'white'}}>
                            Login
                        </Link>
                    </Box>
                </form>
            </Box>
        </Box>
    )
}