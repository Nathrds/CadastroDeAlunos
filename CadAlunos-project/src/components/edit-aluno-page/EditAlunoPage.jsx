// import React from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { InputField } from "../login-components/InputField";
import { Button } from "../registration-page/Button";
import { LogoCadAlunos } from "../LogoCadAlunos";
import { IconRowEdit } from "./IconRowEdit";
import styles from "./EditAlunoPage.module.css";
import { ButtonVoltar } from "./ButtonVoltar";

export const EditAlunoPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { aluno } = location.state;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nome: aluno.nome,
      email: aluno.email,
      cpf: aluno.cpf,
      endereco: aluno.endereco,
    },
  });

  const onSubmit = (data) => {
    console.log("Dados atualizados:", data);
  };

  return (
    <div className={styles.container}>
      <div className={styles.container_logo_circle}>
        <div className={styles.circle_container}></div>
        <div className={styles.logo}>
          <LogoCadAlunos />
        </div>
      </div>
      <div className={styles.info_dados}>
        <div className={styles.info_edit_dados}>
          <h1>Editar Dados</h1>
          <div className={styles.container_edit}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.input_icons}>
                <InputField
                  label="Nome"
                  name="nome"
                  type="text"
                  register={register}
                  error={errors.nome?.message}
                />
                <div className={styles.icons_editPage}>
                  <IconRowEdit />
                </div>
              </div>
              <div className={styles.input_icons}>
                <InputField
                  label="Email"
                  name="email"
                  type="email"
                  register={register}
                  error={errors.email?.message}
                />
                <div className={styles.icons_editPage}>
                  <IconRowEdit />
                </div>
              </div>
              <div className={styles.input_icons}>
                <InputField
                  label="CPF"
                  name="cpf"
                  type="text"
                  register={register}
                  error={errors.cpf?.message}
                />
                <div className={styles.icons_editPage}>
                  <IconRowEdit />
                </div>
              </div>
              <div className={styles.input_icons}>
                <InputField
                  label="Endereço"
                  name="endereco"
                  type="text"
                  register={register}
                  error={errors.endereco?.message}
                />
                <div className={styles.icons_editPage}>
                  <IconRowEdit />
                </div>
              </div>
            </form>
            <div className={styles.btn_voltar_salvar}>
              <a href="#" onClick={() => navigate("/table-page")}>
                <ButtonVoltar type="submit">Voltar</ButtonVoltar>
              </a>
              <a href="#" onClick={() => navigate("/")}>
                <Button type="submit">Salvar</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
