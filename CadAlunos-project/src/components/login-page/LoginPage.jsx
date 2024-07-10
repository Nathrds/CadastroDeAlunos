// import React from 'react'
import { LoginForm } from '../LoginForm'
import { LogoCadAlunos } from '../LogoCadAlunos'
import styles from './LoginPage.module.css'
import { useNavigate } from 'react-router-dom'

export const LoginPage = () => {
    const navigate = useNavigate();

  return (
    <>
        <div className={styles.container_login}>
            <div className={styles.container_info}>
            <h2 className={styles.h2_login}>Seja bem-vindo(a) ao</h2>
            <LogoCadAlunos />
                <p>Faça seu login</p>
                <div className={styles.info_login}>
                    <LoginForm />
                    <p>Não tem uma conta? <a href='#' onClick={() => navigate('/registration-page')}>Cadastre-se</a>
                    </p>
                </div>
            </div>
            <div className={styles.container_img}>
                <img src="../src/assets/img-login.png" alt="imagem-login"/>
            </div>
        </div>
    </>
  )
}
