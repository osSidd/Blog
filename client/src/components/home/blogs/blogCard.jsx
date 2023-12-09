import {Button, Card, CardHeader, CardBody, CardFooter, Heading, Box, Image, Stack, Text, Avatar, ButtonGroup} from '@chakra-ui/react'
import {TimeIcon, ChatIcon} from '@chakra-ui/icons'

import { useNavigate } from 'react-router-dom'

import formatDate from '../../../utils/formatDate'

export default function BlogCard({blog}){

    const navigate = useNavigate()

    function navigateToBlog(){
        navigate(`/blogs/${blog._id}`)
    }

    return (
        <Card
            overflow='hidden'
            direction={{base:'column', sm: 'row'}}
            bg='transparent'
            maxW={{base:'100%', md:"4xl"}}
            mb={8}
            shadow='md'
            transition='all 0.25s ease-in-out'
            _hover={{shadow: 'xl'}}
            onClick={navigateToBlog}
            cursor='pointer'
        >
            <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '250px' }}
                src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                alt='Caffe Latte'
            />
            <Stack>
                <CardHeader>
                    <Heading size='md'>{blog.title}</Heading>
                    <Box display='flex' alignItems='center' mt={4} color='gray.400'>
                        <Box mr={8}>
                            <TimeIcon/>
                            <Text verticalAlign='middle' display='inline-block' ml={2}>{formatDate(blog.createdAt)}</Text>
                        </Box>
                        <Box mr={8}>
                            <ChatIcon/>
                            <Text display='inline-block' ml={2}>0</Text>
                        </Box>
                        <Box>
                            <Avatar size='xs' name='Osama Siddiquee' src='https://bit.ly/dan-abramov'/>
                            <Text display='inline-block' ml={2}>Osama</Text>
                        </Box>
                    </Box>
                    <ButtonGroup mt={3}>
                            {
                                blog.tags.map(tag => (
                                    <Button key={tag._id} size='xs' colorScheme='teal'>{tag.name}</Button>
                                ))
                            }
                    </ButtonGroup>
                </CardHeader>
                
                <CardBody mt={-5}>
                    <Text>{blog.snippet}</Text>
                </CardBody>

                    {/* <CardFooter>
                        <Button colorScheme='purple' onClick={navigateToBlog}>
                            Read More
                        </Button>
                    </CardFooter> */}
            </Stack>
        </Card>
    )
}
