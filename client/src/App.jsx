import { Box } from "@chakra-ui/react"
import { Suspense, lazy } from "react"

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import './App.css'
import ErrorBoundary from "./error/errorBoundary"
import Navbar from "./components/navbar"

const Home = lazy(() => import('./pages/home'))
const Blog = lazy(() => import('./pages/blog'))
const BlogForm = lazy(() => import('./pages/blogForm'))
const Signup = lazy(() => import('./pages/signup'))
const Login = lazy(() => import('./pages/login'))
const ErrorPage = lazy(() => import('./error/errorPage'))


export default function App(){
  return(
    <Box maxW='100vw' minH='100vh' py={12}>
      <BrowserRouter>
        <Navbar/>
        <ErrorBoundary>
          <Suspense fallback={<div>Loading ...</div>}>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/blogs/:id" element={<Blog/>}/>
              <Route path="/blogs/:id/edit" element={<BlogForm/>}/>
              <Route path="/blogs/create" element={<BlogForm/>}/>
              <Route path="/users/signup" element={<Signup/>}/>
              <Route path="/users/login" element={<Login/>}/>
              <Route path="*" element={<ErrorPage/>}/>
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </BrowserRouter>
    </Box>
  )
}