import { Box, Heading } from "@chakra-ui/react";
import BlogCard from "../components/blogs/blogCard";
import useBlogsFetch from "../hooks/useBlogsFetch";

export default function Blogs(){

    const {blogs} = useBlogsFetch()

    return (
        <Box color='#fefefe'>
            <Box w='4xl' mx='auto'>
                <Heading>My Blog</Heading>
            </Box>
            <Box mt={14}>
                {
                    blogs?.map(blog => (
                        <BlogCard
                            blog={blog}
                            key={blog._id}
                        />
                    ))
                }   
            </Box>
        </Box>
    )
}