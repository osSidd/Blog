import { Box } from "@chakra-ui/react"
import { Suspense, lazy } from "react"

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import './App.css'
import ErrorBoundary from "./error/errorBoundary"

const Blogs = lazy(() => import('./pages/blogs'))
const Blog = lazy(() => import('./pages/blog'))
const BlogForm = lazy(() => import('./pages/blogForm'))
const ErrorPage = lazy(() => import('./error/errorPage'))

export default function App(){
  return(
    <Box maxW='100vw' minH='100vh' py={12} bg='#133'>
      <BrowserRouter>
        <ErrorBoundary>
          <Suspense fallback={<div>Loading ...</div>}>
            <Routes>
              <Route path="/" element={<Blogs/>} />
              <Route path="/blogs/:id" element={<Blog/>}/>
              <Route path="/blogs/:id/edit" element={<BlogForm/>}/>
              <Route path="/blogs/create" element={<BlogForm/>}/>
              <Route path="*" element={<ErrorPage/>}/>
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </BrowserRouter>
       
    </Box >
      
  )
}