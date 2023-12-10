import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

import {ChakraProvider} from '@chakra-ui/react'
import BlogContextProvider from './context/blogContext.jsx'
import UserContextProvider from './context/userContext.jsx'
import TagContextProvider from './context/tagContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
      <TagContextProvider>
        <BlogContextProvider>
          <ChakraProvider>
            <App/>
          </ChakraProvider>
        </BlogContextProvider>
      </TagContextProvider>
    </UserContextProvider>
  </React.StrictMode>,
)
