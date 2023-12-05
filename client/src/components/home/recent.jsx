import { Box, Divider, Heading, Text } from "@chakra-ui/react";

export default function Recent(){
    return(
        <Box>
            <Heading as='h2' fontSize='xl'>Recent posts</Heading>
            <Box mt={4}>
                <Text>Climate Change - Planet on life support | Crisis of the hour</Text>
                <Text fontSize='small' color='GrayText'>December 4, 2023</Text>
                <Divider my={2}/>
                <Text>Da vinci code, Angels & Demons, The Inferno - 'Dan Brown'</Text>
                <Text fontSize='small' color='GrayText'>December 3, 2023</Text>

            </Box>
        </Box>
    )
}