// import React from 'react'
import PropTypes from 'prop-types'
import styles from './AlunosTable.module.css'
import { IconRow } from './IconRow'
import { useNavigate } from 'react-router-dom';

export const AlunosTable = ({ alunos }) => {
    const navigate = useNavigate();

    const handleEdit = (aluno) => {
        navigate(`/edit/${aluno.id}`, { state: { aluno } });
    };

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
        <tbody className={styles.td_acao}>
            {alunos.map((aluno) => (
                <tr key={aluno.id} className={styles.tr_info}>
                    <td className={styles.td_nome}>{aluno.nome}</td> 
                    <td className={styles.td_email}>{aluno.email}</td>
                    <td className={styles.td_cpf}>{aluno.cpf}</td>
                    <td className={styles.td_endereco}>{aluno.endereco}</td>
                    <td className={styles.td_acoes}>
                        <IconRow onEdit={() => handleEdit(aluno)} />
                    </td>
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
