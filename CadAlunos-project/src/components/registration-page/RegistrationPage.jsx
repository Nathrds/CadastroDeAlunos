// import React from 'react'
import { LogoCadAlunos } from "../LogoCadAlunos"
import styles from './RegistrationPage.module.css'
import { RegistrationForm } from "./RegistrationForm"
import { Button } from "./Button"
import { useNavigate } from 'react-router-dom'

export const RegistrationPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container_body}>
        <div className={styles.circle_container}></div>
        <div className={styles.logo}>
            <LogoCadAlunos/>
        </div>
        <div className={styles.container_Registration}>
            <div className={styles.form_Registration}>
                <p>Formulário de Cadastro</p>
                <RegistrationForm />
                <Button type="submit" className={styles.button_register}>
                  <a href="#" onClick={() => navigate('/table-page')}>Cadastrar</a>
                </Button>
            </div>
        </div>
    </div>
  )
}
