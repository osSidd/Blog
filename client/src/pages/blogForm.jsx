import { Box, Button, FormControl, FormLabel, Heading, Input, Textarea } from "@chakra-ui/react";
import BackToBlogsBtn from "../components/backBtn";
import useBlogForm from "../hooks/useBlogForm";
import { useParams } from "react-router-dom";

export default function BlogForm(){

    const params = useParams()
    const id = params.id

    const {formData, messageRef, handleChange, handleSubmit} = useBlogForm(id)
    
    return (
        <Box color='white' w={{base:'90%', md:'4xl'}} mx='auto'>
            <BackToBlogsBtn/>
            <form style={{marginTop:'32px'}} onSubmit={handleSubmit}>
                <Heading as='h1' size='4xl'>Create a new blog</Heading>
                <FormControl mt={12}>
                    <FormLabel>Title</FormLabel>
                    <Input 
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Enter blog title" 
                    />
                </FormControl>      
                <FormControl mt={8}>
                    <FormLabel>Snippet</FormLabel>
                    <Input
                        name="snippet"
                        value={formData.snippet}
                        onChange={handleChange} 
                        placeholder="Enter blog snippet" 
                    />
                </FormControl>
                <FormControl mt={8}>
                    <FormLabel>Body</FormLabel>
                    <Textarea ref={messageRef} rows={8} resize='none' placeholder="Enter blog body" />
                </FormControl>        
                <Button type="submit" colorScheme='yellow' px={12} mt={8}>{ id ? 'Edit Blog' : 'Add Blog'}</Button>    
            </form>  
        </Box>
    )
}