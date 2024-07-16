import {useForm} from 'react-hook-form'
import { InputField } from '../login-components/InputField'
import { LoginButton } from '../login-components/LoginButton'
import styles from './LoginForm.module.css'

export const LoginForm = () => {
    const {register, handleSubmit, formState: { errors }} = useForm()

  return (
    <form className={styles.container_form} onSubmit={handleSubmit(onsubmit)}>
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
            error={errors.password?.message}
        />

        <LoginButton type="submit">Entrar</LoginButton>

    </form>
  )
}
