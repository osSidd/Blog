import {Button, Card, CardHeader, CardBody, CardFooter, Heading, Image, Stack, Text} from '@chakra-ui/react'
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
            shadow='none'
        >
            <CardHeader>
                <Heading size='md'>{blog.title}</Heading>
                <Text mt={2} color='gray.400'>{formatDate(blog.createdAt)}</Text>
            </CardHeader>
            
            <CardBody ml={5} borderLeft='2px' borderColor='red.500'>
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
