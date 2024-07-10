// import React from 'react'
// import { useState } from "react"
import { InputField } from "../InputField"
import { Button } from './Button'
import { useNavigate } from "react-router-dom"
import { LogoCadAlunos } from "../LogoCadAlunos"
import {useForm} from 'react-hook-form'
import styles from './RegistrationForm.module.css'

export const RegistrationForm = () => {

    const {register, handleSubmit, formState: { errors }} = useForm()

    const navigate = useNavigate()

    const onSubmit = (event) => {
        event.preventDefault()

        navigate('/registration-page')
    }

  return (
    <div className={styles.container_body}>
        <div className={styles.circle_container}></div>
        <div className={styles.logo}>
            <LogoCadAlunos/>
        </div>
        <div className={styles.container_Registration}>
            <div className={styles.form_Registration}>
                <p>Formulário de Cadastro</p>
                <form onSubmit={handleSubmit(onSubmit)} className={styles.form_register}>
                    <InputField 
                        label="Nome completo"
                        name="nome"
                        type="text"
                        register={register}
                        error={errors.nome?.message}
                    />

                    <InputField 
                        label="Email"
                        name="email"
                        type="email"
                        register={register}
                        error={errors.email?.message}
                    />

                    <InputField 
                        label="CPF"
                        name="cpf"
                        type="text"
                        register={register}
                        error={errors.cpf?.message}
                    />

                    <InputField 
                        label="Endereço"
                        name="endereco"
                        type="text"
                        register={register}
                        error={errors.endereco?.message}
                    />

                    <InputField 
                        label="Senha"
                        name="password"
                        type="password"
                        register={register}
                        error={errors.password?.message}
                    />

                    
                    <Button type="submit" className={styles.button_register}>
                        <a href="">Cadastrar</a>
                    </Button>
                </form>
            </div>
        </div>
    </div>
  )
}
