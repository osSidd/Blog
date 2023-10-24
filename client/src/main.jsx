import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {ChakraProvider} from '@chakra-ui/react'
import BlogContextProvider from './context/blogContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <BlogContextProvider>
        <App/>
      </BlogContextProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
