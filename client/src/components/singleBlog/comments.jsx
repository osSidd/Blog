import {Box, Avatar, Text} from '@chakra-ui/react'
import {DeleteIcon, EditIcon, StarIcon} from '@chakra-ui/icons'

import formatDate from '../../utils/formatDate'
import useCommentForm from '../../hooks/comments/useCommentForm'

export default function Comments({blogId, comments}){

    const {deleteComment} = useCommentForm()

    return (
        <Box mt={16}>
            {
                comments.map(comment => (
                    <Box mt={6} key={comment._id}>
                        <Box display='flex' alignItems='center'>
                            <Avatar mr={4} size='xs' name='Osama Siddiquee' src='https://bit.ly/dan-abramov'/>
                            <Text mr={4}>{comment.author}</Text>
                            <Text fontSize='xs'>{formatDate(comment.createdAt)}</Text>
                        </Box>
                        <Box ml={12} mt={4} fontSize='xl'>{comment.body}</Box>
                        <Box ml={12} mt={4} display='flex' alignItems='center'>
                            <StarIcon mr={2}/>
                            <Text mr={8}>{comment.likes}</Text>
                            <DeleteIcon color='red.300' mr={2} cursor='pointer' onClick={() => deleteComment(blogId, comment._id)}/>
                            <EditIcon color='blue.300' cursor='pointer'/>
                        </Box>
                    </Box>
                ))
            }
        </Box>
    )
}