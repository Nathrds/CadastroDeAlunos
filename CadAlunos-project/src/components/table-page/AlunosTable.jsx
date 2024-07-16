// import React from 'react'
import PropTypes from 'prop-types'
import styles from './AlunosTable.module.css'
import { IconRow } from './IconRow'

export const AlunosTable = ({ alunos }) => {
  return (
    <table className={styles.table_container}>
        <thead>
            <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>CPF</th>
                <th>Endereço</th>
            </tr>
        </thead>
        <tbody>
            {alunos.map((aluno) => (
                <tr key={aluno.id} className={styles.tr_info}>
                    <td className={styles.td_nome}>{aluno.nome}</td> 
                    <td className={styles.td_email}>{aluno.email}</td>
                    <td className={styles.td_cpf}>{aluno.cpf}</td>
                    <td className={styles.td_endereco}>{aluno.endereco}</td>
                    <IconRow/>
                </tr>
            ))}
        </tbody>
    </table>
  )
}

AlunosTable.propTypes = {
    alunos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            nome: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
            cpf: PropTypes.string.isRequired,
            endereco: PropTypes.string.isRequired
        })
    ).isRequired
}
