// import { useState } from 'react'
import './App.css'
import { LoginPage } from './components/login-page/LoginPage'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import { RegistrationPage } from './components/registration-page/RegistrationPage'
import { TablePage } from './components/table-page/TablePage'

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />}/>
            <Route path="/registration-page" element={<RegistrationPage />}/>
            <Route path="/table-page" element={<TablePage />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
