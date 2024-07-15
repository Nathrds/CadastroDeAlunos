// import React from 'react'
import { AlunosTable } from "./AlunosTable"
import { LogoCadAlunos } from "../LogoCadAlunos"
import styles from "./TablePage.module.css"
import { Button } from "../registration-page/Button"

export const TablePage = () => {
    const alunos = [
        {id: 1, nome:'Ana Pereira da Silva Carvalho', email: 'ana.banana@gmail.com', cpf: '000.000.000-00' ,endereco: 'Rua do Ovo, numero 0, Asa Sul 913' },
        {id: 2, nome:'Marcelo Ferreira Peralta', email: 'marcelo-peralta@hotmail.com', cpf: '111.111.111-11' ,endereco: 'Rua 04, numero 2, Sudoeste' },
        {id: 3, nome:'Mayara Cardoso Pires', email: 'may_pires@gmail.com', cpf: '222.222.222-22' ,endereco: 'Rua 21, numero 1/4 bloco C, Ceilândia' }
    ]

  return (
    <div className={styles.cotainer_body}>
        <div className={styles.container_info}>
            <div className={styles.circle_container}></div>
            <div className={styles.logo}>
                <LogoCadAlunos />
            </div>
            <div className={styles.lista_alunos}>
                <h1>Lista de Alunos cadastrados</h1>
                <AlunosTable alunos={alunos} />
            </div>
            <div>
                <Button type="submit" className={styles.button_register}> 
                    <a href="#">Voltar</a>
                </Button>
            </div>
        </div>
    </div>
  )
}
