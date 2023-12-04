import {useParams} from 'react-router-dom'

import { Box, Button, Heading, Text, } from "@chakra-ui/react";
import BackToBlogsBtn from '../components/backBtn';
import {DeleteIcon, EditIcon} from '@chakra-ui/icons'

import useBlogFetch from '../hooks/useBlogFetch'
import useUserContext from '../hooks/useUserContext'
import formatDate from '../utils/formatDate';

export default function Blog(){

    const params = useParams()
    const id = params.id
    
    const {blog, deleteBlog, editBlog} = useBlogFetch(id)
    const {user} = useUserContext()

    return(
        <Box w={{base:'90%', md:'4xl'}} mx='auto'>
            
            <BackToBlogsBtn/>
            
            <Box mt={12}>
                <Heading as='h1' size='4xl'>{blog.title}</Heading>
                <Box display='flex' alignItems='center' mt={8} mb={4} fontSize={18}>
                    <Text mr={4}>Created on {formatDate(blog.createdAt)}</Text>
                    <Text>By - Author&apos; s name</Text>
                </Box>
                <Box>
                    {
                        blog.keyword?.map((item, index) => (
                            <Button type='button' mr={3} colorScheme='teal' color='white' key={index}>{item}</Button>
                        )) 
                    }
                </Box>
                <Box mt={2} h={0.25} bg='blackAlpha.400' />
                <Box mt={4}>
                    <Text>{blog.body}</Text>
                </Box>
                {
                    user && 
                    <Box display='flex' alignItems='center' mt={12}>
                        <DeleteIcon boxSize={8} mr={8} color='red.300' cursor='pointer' onClick={deleteBlog}/>
                        <EditIcon boxSize={8} color='blue.300' cursor='pointer' onClick={editBlog}/>
                    </Box>
                }
            </Box>
        </Box>
    )
}