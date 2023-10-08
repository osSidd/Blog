import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Signup from "./pages/signup"

import './App.css'
import Login from "./pages/login"
import Navbar from './components/navbar'
import Dashboard from './pages/dashboard'

export default function App(){
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className="main">
          <Routes>
            <Route path='/' element={<Dashboard/>} />
            <Route path='signup' element={<Signup/>} />
            <Route path='login' element={<Login/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}