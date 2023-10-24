import {useNavigate, useParams} from 'react-router-dom'

import { Box, Button, Divider, Heading, Icon, Text, baseTheme } from "@chakra-ui/react";
import {ChevronRightIcon} from '@chakra-ui/icons'

import useBlogFetch from '../hooks/useBlogFetch'

export default function Blog(){

    const params = useParams()
    const id = params.id

    const navigate = useNavigate()

    function navigateTo(){
        navigate('/')
    }

    const {blog} = useBlogFetch(id)

    return(
        <Box color='whiteAlpha.800' w={{base:'90%', md:'4xl'}} mx='auto'>
            
            <Button variant='unstyled' onClick={navigateTo} color='blue.300'>
                blog
                <Icon boxSize={6} as={ChevronRightIcon} />
            </Button>
            
            <Box mt={2}>
                <Heading as='h1' size='4xl'>{blog.title}</Heading>
                <Box display='flex' alignItems='center' mt={8} mb={4} fontSize={18}>
                    <Text mr={4}>Created on {new Date(blog.createdAt).toLocaleDateString()}</Text>
                    <Text>By - Author's name</Text>
                </Box>
                <Divider color='GrayText'/>
                <Box mt={4}>
                    <Text>{blog.body}</Text>
                </Box>
            </Box>
        </Box>
    )
}