import { useRef } from 'react'

import { Box, Text, Button, FormControl, FormLabel, Heading, Input} from '@chakra-ui/react'
import {EditIcon, DeleteIcon} from '@chakra-ui/icons'

import useTagContext from '../hooks/tags/useTagContext'

export default function TagForm(){

    const {tags, dispatch} = useTagContext()
    const tagRef = useRef()

    async function addTag(e){
        e.preventDefault()
        let tagVal = tagRef.current.value

        if(tags.find(item => item.name === tagVal)) return
        
        try{
            const response = await fetch('http://localhost:3000/api/tags', {
                method: 'POST',
                credentials:'include',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({name: tagVal})
            })
            if(!response.ok) return 

            const data = await response.json()
            dispatch({
                type:'ADD_TAG',
                payload: data
            })
        }catch(err){
            console.log(err.message)
        }   
    }

    async function deleteTag(id){
        console.log('hi')
        const response = await fetch(`http://localhost:3000/api/tags/${id}`, {
            method: 'DELETE',
            credentials:'include'
        })

        if(response.ok){
            dispatch({
                type: 'DELETE_TAG',
                payload: id 
            })
        }
    }

    function editTag(e, id){
        dispatch({
            type: 'EDIT_TAG_VALUE',
            payload: {
                value: e.target.value,
                id,
            }
        })
    }

    async function updateTag(e, id){
        e.preventDefault()
        console.log(tags.find(item => item._id === id))
        const response = await fetch(`http://localhost:3000/api/tags/${id}`, {
            method:'PUT',
            credentials: 'include',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(tags.find(item => item._id === id))
        })
        if(response.ok){
            toggleEdit(id)
        }
    }

    function toggleEdit(id){
        dispatch({
            type: 'EDIT_TAG',
            payload: id
        })
    }

    return(
        <Box w='75%' mt={16} mx='auto'>
        <form onSubmit={addTag}>
            <Heading  as='h2' fontSize='3xl'>Create a tag</Heading>
            <FormControl mt={8}>
                <FormLabel>
                    Enter tag name <span aria-label='required'>*</span> :
                </FormLabel>
                <Input ref={tagRef} mt={4} type='text' placeholder='tag name'/>
            </FormControl>
            <Button type='submit' mt={8}>Add tag</Button>
        </form>
        <Heading mt={16} as='h2' fontSize='2xl'>Available tags:</Heading>
        <Box display='flex' flexWrap='wrap' justifyContent='center' mt={8}>
            {
                tags.map(tag => (
                    <Box key={tag._id} my={4} display='flex' alignItems='center' m={4}>
                        { !tag.edit && <Text textTransform='uppercase' fontWeight={500} fontSize='xl' mr={4}>{tag.name}</Text> }
                        {
                            tag.edit ? 
                            
                            <form onSubmit={e => updateTag(e, tag._id)}>
                                <FormControl>
                                    <Input defaultValue={tag.name} onChange={e => editTag(e, tag._id)}/>
                                </FormControl>
                                <Button type='submit'>Update</Button>
                            </form> : 
                            <EditIcon onClick={() => toggleEdit(tag._id)} cursor='pointer' mr={4} color='blue.300'/> 
                        }
                        
                        <DeleteIcon onClick={() => deleteTag(tag._id)} cursor='pointer' color='red.200'/>
                    </Box>
                ))
            }
        </Box>
        </Box>
    )
}