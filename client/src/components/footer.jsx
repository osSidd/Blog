import { Box, Link } from "@chakra-ui/react";

export default function Footer(){

    const style = {
        textDecoration:'none',
        fontWeight: '600',
    }

    return (
        <Box textAlign='center' mt={32}>
            <Link style={style} href="/" >Os&apos; writings</Link> - <Link style={style} href="https://portfolio-green-two-40.vercel.app/" target="_blank" rel="noreferrer">Osama Siddiquee</Link> | Copyright &copy; {new Date().getFullYear()}&nbsp; 
            
        </Box>
    )
}