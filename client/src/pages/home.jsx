import { Box } from "@chakra-ui/react";

import Blogs from '../components/home/blogs/blogs'
import Tags from "../components/home/tags";
import NewsLetters from "../components/home/newsletters";
import Recent from "../components/home/recent";
import Search from "../components/home/search";
import Social from "../components/home/social";

import useBlogsFetch from "../hooks/blogs/useBlogsFetch";
import useTagsFetch from '../hooks/tags/useTagsFetch'

export default function Home(){

    const {blogs} = useBlogsFetch()  
    const {tags} = useTagsFetch()

    return(
        <Box display='flex' justifyContent='space-between' px={8} py={14}>
            <Box w='65%'>
                <Blogs blogs={blogs}/>
            </Box>
            <Box w='30%'>
                <Box><Search/></Box>
                <Box mt={14}><Tags tags={tags} /></Box>
                <Box mt={14}><Recent/></Box>
                <Box mt={14}><NewsLetters/></Box>
                <Box mt={14}><Social/></Box>
            </Box>
        </Box>
    )
}