import {Button, Card, CardHeader, CardBody, CardFooter, Heading, Image, Stack, Text} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export default function BlogCard({blog}){

    const navigate = useNavigate()

    function navigateToBlog(){
        navigate(`/blogs/${blog._id}`)
    }

    return (
        <Card
            overflow='hidden'
            bg='transparent'
            borderColor='GrayText'
            maxW={{base:'100%', md:"4xl"}}
            mb={8}
            variant='outline'
            color='white'
            mx='auto'
        >
            <CardHeader>
                <Heading size='md'>{blog.title}</Heading>
                <Text mt={2} color='gray.400'>{new Date(blog.createdAt).toLocaleDateString()}</Text>
            </CardHeader>
            
            <CardBody>
                <Text>{blog.snippet}</Text>
            </CardBody>

            <CardFooter>
                <Button color='blue.300' variant='unstyled' onClick={navigateToBlog}>
                    Read More
                </Button>
            </CardFooter>
        </Card>
    )
}