// import { useState } from 'react'
import './App.css'
import { LoginPage } from './components/login-page/LoginPage'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import { RegistrationForm } from './components/registration-page/RegistrationForm'
import { RegistrationPage } from './components/registration-page/RegistrationPage'

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />}/>
            <Route path="/registration" element={<RegistrationForm />}/>
            <Route path="/registration-page" element={<RegistrationPage />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
