// import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { InputField } from '../login-components/InputField';
import { Button } from '../registration-page/Button';
// import styles from './EditAlunoPage.module.css';

export const EditAlunoPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { aluno } = location.state;

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
        nome: aluno.nome,
        email: aluno.email,
        cpf: aluno.cpf,
        endereco: aluno.endereco
        }
    });

    const onSubmit = (data) => {
        console.log('Dados atualizados:', data);
        navigate('/');
    };


  return (
    <div >
        <h1>Editar Aluno</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="Nome"
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
        <Button type="submit">Salvar</Button>
      </form>
    </div>
  )
}
