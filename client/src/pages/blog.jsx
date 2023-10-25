import {useParams} from 'react-router-dom'

import { Box, Button, Divider, Heading, Icon, Text, baseTheme } from "@chakra-ui/react";
import BackToBlogsBtn from '../components/backBtn';
// import {ArrowLeftIcon} from '@chakra-ui/icons'
import {DeleteIcon, EditIcon} from '@chakra-ui/icons'

import useBlogFetch from '../hooks/useBlogFetch'

export default function Blog(){

    const params = useParams()
    const id = params.id
    
    const {blog, deleteBlog, editBlog} = useBlogFetch(id)

    return(
        <Box color='whiteAlpha.800' w={{base:'90%', md:'4xl'}} mx='auto'>
            
            <BackToBlogsBtn/>
            
            <Box mt={12}>
                <Heading as='h1' size='4xl'>{blog.title}</Heading>
                <Box display='flex' alignItems='center' mt={8} mb={4} fontSize={18}>
                    <Text mr={4}>Created on {new Date(blog.createdAt).toLocaleDateString()}</Text>
                    <Text>By - Author's name</Text>
                </Box>
                <Divider color='GrayText'/>
                <Box mt={4}>
                    <Text>{blog.body}</Text>
                </Box>
                <Box display='flex' alignItems='center' mt={12}>
                    <DeleteIcon boxSize={8} mr={8} color='red.300' cursor='pointer' onClick={deleteBlog}/>
                    <EditIcon boxSize={8} color='blue.300' cursor='pointer' onClick={editBlog}/>
                </Box>
            </Box>
        </Box>
    )
}