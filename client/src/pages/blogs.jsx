import { Box, Button, Heading } from "@chakra-ui/react";
import BlogCard from "../components/blogs/blogCard";
import useBlogsFetch from "../hooks/useBlogsFetch";
import {AddIcon} from '@chakra-ui/icons'
import { useNavigate } from "react-router-dom";

export default function Blogs(){

    const {blogs} = useBlogsFetch()

    const navigate = useNavigate()

    function handleNavigation(){
        navigate('/blogs/create')
    }

    console.log(blogs)

    return (
        <Box color='#fefefe'>
            <Box w={{base:'90%', md:'4xl'}} display='flex' alignItems='center' justifyContent='space-between' mx='auto'>
                <Heading as='h1' size='4xl'>My Blog</Heading>
                <Button 
                    colorScheme='yellow'
                    variant='outline' 
                    textTransform='capitalize' 
                    fontSize={18}
                    onClick={handleNavigation}
                >
                    add blog
                </Button>
                {/* <AddIcon boxSize={14} cursor='pointer' onClick={handleNavigation} bg='yellow' borderRadius='50%' p={4} color='black'/> */}
            </Box>
            <Box mt={14}>
                {
                    blogs.length ? 
                    blogs?.map(blog => (
                        <BlogCard
                            blog={blog}
                            key={blog._id}
                        />
                    ))
                    :
                    <Box color='white' textAlign='center'>
                        <Heading>No Blogs, add some</Heading>
                    </Box>
                }   
            </Box>
        </Box>
    )
}