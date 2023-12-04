import { useNavigate } from "react-router-dom"
import { Button } from "@chakra-ui/react"
import { ArrowLeftIcon } from "@chakra-ui/icons"

export default function BackToBlogsBtn(){

    const navigate = useNavigate()

    function navigateTo(){
        navigate('/')
    }

    return (
        <Button 
            leftIcon={<ArrowLeftIcon boxSize={3}/>} 
            onClick={navigateTo} 
            textTransform='capitalize' 
            colorScheme='purple'
            size='sm'
            mt={16}
        >
            blogs
        </Button>
    )
}