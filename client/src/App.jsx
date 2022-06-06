import React from 'react';
import {
  BrowserRouter, 
  Routes, 
  Route
} from 'react-router-dom';
import './vendor/css/App.css';
import ChatComponent from './components/Chat'
import Sigin from './components/auth/signin'
import Sigup from './components/auth/signup'

const App = () => {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<ChatComponent />}/>
      <Route path="/Signup" element={<Sigup />}/>
      <Route path="/Signin" element={<Sigin />}/>
     </Routes>
    </BrowserRouter>
    // <ChatComponent />
  )
}

export default App