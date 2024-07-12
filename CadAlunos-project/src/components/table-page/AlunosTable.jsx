// import React from 'react'
import PropTypes from 'prop-types'

export const AlunosTable = ({ alunos }) => {
  return (
    <table>
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
                <tr key={aluno.id}>
                    <td>{aluno.nome}</td>
                    <td>{aluno.email}</td>
                    <td>{aluno.cpf}</td>
                    <td>{aluno.endereco}</td>
                </tr>
            ))}
        </tbody>
    </table>
  )
}

AlunosTable.propTypes = {
    alunos: PropTypes.string.isRequired
}