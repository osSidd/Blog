import {Button, Card, CardHeader, CardBody, CardFooter, Heading, Box, Image, Stack, Text} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import formatDate from '../../utils/formatDate'

export default function BlogCard({blog}){

    const navigate = useNavigate()

    function navigateToBlog(){
        navigate(`/blogs/${blog._id}`)
    }

    return (
        <Card
            overflow='hidden'
            bg='transparent'
            maxW={{base:'100%', md:"4xl"}}
            mb={8}
            shadow='md'
            transition='all 0.25s ease-in-out'
            _hover={{shadow: 'xl'}}
        >
            <CardHeader>
                <Heading size='md'>{blog.title}</Heading>
                <Box display='flex' alignItems='center' mt={4} color='gray.400'>
                    <Box mr={8}>
                        <i className='fa fa-clock-o'></i>
                        <Text display='inline-block' ml={2}>{formatDate(blog.createdAt)}</Text>
                    </Box>
                    <Box mr={8}>
                        <i className='fa fa-comment-o'></i>
                        <Text display='inline-block' ml={2}>0</Text>
                    </Box>
                    <Box>
                        <i className='fa fa-user-o'></i>
                        <Text display='inline-block' ml={2}>Osama</Text>
                    </Box>
                </Box>
            </CardHeader>
            
            <CardBody>
                <Text>{blog.snippet}</Text>
            </CardBody>

            <CardFooter>
                <Button colorScheme='purple' onClick={navigateToBlog}>
                    Read More
                </Button>
            </CardFooter>
        </Card>
    )
}
