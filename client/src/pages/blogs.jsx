import { Box, Heading } from "@chakra-ui/react";

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
                    <Box color='white' textAlign='center'>
                        <Heading>No Blogs, add some</Heading>
                    </Box>
                }   
            </Box>
        </Box>
    )
}