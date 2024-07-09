// import { useState } from 'react'
import './App.css'
// import { LoginForm } from './components/LoginForm'

function App() {

  return (
    <>
      <div className='container-login'>
      <h2 className='h2-login'>Seja bem-vindo(a) ao</h2>
        <div className='logo-name'>
          <h1><span>Cad</span> Aluno</h1>
        </div>
        <p>Faça seu login</p>
        <div className='info-login'>
          {/* <LoginForm /> */}
          <p>Não tem uma conta? <a href="">Cadastre-se</a></p>
        </div>
      </div>
    </>
  )
}

export default App
