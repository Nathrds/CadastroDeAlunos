// import { useState } from 'react'
import './App.css'
import { LoginForm } from './components/LoginForm'
import { LogoCadAlunos } from './components/LogoCadAlunos'

function App() {

  return (
    <>
      <div className='container-login'>
      <div className='container-info'>
        <h2 className='h2-login'>Seja bem-vindo(a) ao</h2>
        <LogoCadAlunos />
          <p>Faça seu login</p>
          <div className='info-login'>
            <LoginForm />
            <p>Não tem uma conta? <a href="">Cadastre-se</a></p>
          </div>
        </div>
        <div className='container-img'>
          <img src="../src/assets/img-login.png" alt="imagem-login"/>
        </div>
      </div>
    </>
  )
}

export default App
