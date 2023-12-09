import { Box, Button, Heading } from "@chakra-ui/react";

export default function Tags({tags}){
   
    return (
        <Box>
            <Heading as='h2' fontSize='xl'>Tags</Heading>
            <Box mt={4} display='flex' flexWrap='wrap' alignItems='center'>
            {
                tags.map(tag => (
                    <Button key={tag._id} mr={2} mb={2} colorScheme="teal">{tag.name}</Button>
                ))
            }
            </Box>
        </Box>
    )
}