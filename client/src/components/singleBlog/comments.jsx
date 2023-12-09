import {Box, Avatar, Text} from '@chakra-ui/react'
import {StarIcon} from '@chakra-ui/icons'

import formatDate from '../../utils/formatDate'

export default function Comments({comments}){
    return (
        <Box mt={16}>
            {
                comments.map(comment => (
                    <Box key={comment._id}>
                        <Box display='flex' alignItems='center'>
                            <Avatar mr={4} size='xs' name='Osama Siddiquee' src='https://bit.ly/dan-abramov'/>
                            <Text mr={4}>{comment.author}</Text>
                            <Text fontSize='sm'>{formatDate(comment.createdAt)}</Text>
                        </Box>
                        <Box ml={12} mt={4} fontSize='xl'>{comment.body}</Box>
                        <Box ml={12} mt={4} display='flex' alignItems='center'>
                            <StarIcon mr={2}/>
                            <Text>{comment.likes}</Text>
                        </Box>
                    </Box>
                ))
            }
        </Box>
    )
}