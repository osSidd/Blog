import { Box, Text } from "@chakra-ui/react";

import BlogCard from "../components/blogs/blogCard";
import useBlogsFetch from "../hooks/useBlogsFetch";

export default function Blogs(){

    const {blogs} = useBlogsFetch()  

    return (
        <Box>
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
                    <Box textAlign='center'>
                        <Text fontSize={18} color='GrayText'>No Blogs</Text>
                    </Box>
                }   
            </Box>
        </Box>
    )
}