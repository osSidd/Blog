import { Box, Button, Heading } from "@chakra-ui/react";

export default function Social(){
    
    const social = ['Linkedin', 'Instagram', 'Twitter', 'Github', 'RSS']
    
    return(
        <Box>
            <Heading as='h2' fontSize='xl'>Follow me</Heading>
            <Box mt={4} display='flex' alignItems='center' flexWrap='wrap'>
            {
                social.map(icon => (
                    <Button mb={2} mr={2} colorScheme='yellow' key={icon}>{icon}</Button>
                ))
            }
            </Box>
        </Box>
    )
}