import { Button, Heading, Input } from "@chakra-ui/react";

export default function NewsLetters(){
    return (
        <form>
            <Heading as='h2' fontSize='xl'>Subscribe to my newsletters</Heading>
            <Input
                placeholder="enter your email address"
                mt={4}
            />
            <Button mt={3} colorScheme="blue">Subscribe</Button>
        </form>
    )
}