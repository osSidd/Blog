import { Box } from "@chakra-ui/react"
import { Suspense, lazy } from "react"

import './App.css'

const Blogs = lazy(() => import('./pages/blogs'))

export default function App(){
  return(
    <Box maxW='full'>
      <Suspense fallback={<div>Loading ...</div>}>
        <Blogs/>
      </Suspense>
    </Box >
      
  )
}