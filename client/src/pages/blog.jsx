import {useParams} from 'react-router-dom'

import { Box, Button, Heading, Text, } from "@chakra-ui/react";
import {DeleteIcon, EditIcon} from '@chakra-ui/icons'

import BackToBlogsBtn from '../components/backBtn';

import useBlogFetch from '../hooks/blogs/useBlogFetch'
import useUserContext from '../hooks/user/useUserContext'

import formatDate from '../utils/formatDate';
import Comments from '../components/singleBlog/comments';
import useCommentFetch from '../hooks/comments/useCommentFetch';

export default function Blog(){

    const params = useParams()
    const id = params.id
    
    const {blog, deleteBlog, editBlog} = useBlogFetch(id)
    const {comments} = useCommentFetch(id)
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
                        blog.tags?.map(tag => (
                            <Button type='button' mr={3} colorScheme='teal' key={tag._id}>{tag.name}</Button>
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

                {comments.length ? <Comments comments={comments}/> : <Text mt={12}>No comments</Text> }
            </Box>
        </Box>
    )
}