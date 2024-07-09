import {useForm} from 'react-hook-form'
import { InputField } from './InputField'
import { LoginButton } from './LoginButton'

export const LoginForm = () => {
    const {register, handleSubmit, formState: { errors }} = useForm()

  return (
    <form onSubmit={handleSubmit(onsubmit)}>
        <InputField 
            label="Email"
            name="email"
            type="email"
            register={register}
            error={errors.email?.message}
        />

        <InputField 
            label="Senha"
            name="password"
            type="password"
            register={register}
            error={errors.email?.message}
        />

        <LoginButton type="submit">Entrar</LoginButton>

    </form>
  )
}
