import {Button, Card, CardBody, CardFooter, Heading, Image, Stack, Text} from '@chakra-ui/react'

export default function BlogCard({image, title, snippet}){
    return (
        <Card
            direction={{base:'column', sm:'row'}}
            overflow='hidden'
            variant='outline'
            maxW={{base:'100%', md:"3xl"}}
            mb={8}
        >
            <Image
                objectFit='cover'
                maxW={{base: '100%', sm:'200px'}}
                src={image}
                alt="blog image"
            />
            <Stack>
                <CardBody>
                    <Heading size='md'>{title}</Heading>
                    <Text mt={2}>{snippet}</Text>
                </CardBody>
                <CardFooter>
                    <Button colorScheme='blue' variant='ghost'>
                        Read More
                    </Button>
                </CardFooter>
            </Stack>

        </Card>
    )
}
