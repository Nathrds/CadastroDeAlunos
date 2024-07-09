// import React from 'react'
import {useForm} from 'react-hook-form'
import { InputField } from './InputField'
// import { StyledComponents } from './styled-components'


export const LoginForm = () => {
    const {register, handleSubmit, formState: { errors }} = useForm()

  return (
    <form onSubmit={handleSubmit(onsubmit)}>
        <InputField 
            label="Email"
            name="email"
            type="email"
            register={register({ required: 'E-mail é obrigatório!'})}
            error={errors.email?.message}
        />

        <InputField 
            label="Senha"
            name="password"
            type="password"
            register={register({ required: 'Senha é obrigatória!'})}
            error={errors.email?.message}
        />

        <LoginForm type="submit">Entrar</LoginForm>

    </form>
  )
}
