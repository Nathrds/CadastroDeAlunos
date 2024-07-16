// import React from 'react'
// import { useState } from "react"
import { InputField } from "../login-components/InputField"
import { useNavigate } from "react-router-dom"
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
    <div className={styles.container_form_register}>
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
        </form>
    </div>
  )
}
