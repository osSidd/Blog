import { FormControl, FormLabel, Input } from "@chakra-ui/react"

export default function FormControlElement({label, name, type='text', placeholder, value, handleChange}){
    return (
        <FormControl mt={6}>
            <FormLabel>{label}:</FormLabel>
            <Input 
                name={name}
                placeholder={placeholder}
                type={type}
                value={value}
                onChange={handleChange}
                required
            />
        </FormControl>
    )
}