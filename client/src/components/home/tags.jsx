import { Box, Button, Heading } from "@chakra-ui/react";

export default function Tags(){
   
    const tagArr = ['Technology', 'Jobs', 'Skills', 'Environment', 'Planet', 'Climate change', 'Education']

    return (
        <Box>
            <Heading as='h2' fontSize='xl'>Tags</Heading>
            <Box mt={4} display='flex' flexWrap='wrap' alignItems='center'>
            {
                tagArr.map((tag, index) => (
                    <Button key={index} mr={2} mb={2} colorScheme="teal">{tag}</Button>
                ))
            }
            </Box>
        </Box>
    )
}