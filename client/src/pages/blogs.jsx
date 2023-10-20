import { Box } from "@chakra-ui/react";
import BlogCard from "../components/blogs/blogCard";

import data from '../data/data'

export default function Blogs(){

    return (
        <Box mx={4}>
            <Box py={12} mx={4}>
                {
                    data.map(blog => (
                        <BlogCard
                            image={blog.image}
                            title={blog.title}
                            snippet={blog.snippet}
                            key={blog.id}
                        />
                    ))
                }   
            </Box>
        </Box>
    )
}