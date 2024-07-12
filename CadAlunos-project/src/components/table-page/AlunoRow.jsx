// import React from 'react'
import PropTypes from 'prop-types'

export const AlunoRow = ({ aluno }) => {
  return (
    <tr>
        <td>{aluno.nome}</td>
        <td>{aluno.email}</td>
        <td>{aluno.cpf}</td>
        <td>{aluno.endereco}</td>
    </tr>
  )
}

AlunoRow.propTypes = {
    aluno: PropTypes.string.isRequired,
    nome: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    cpf: PropTypes.string.isRequired,
    endereco: PropTypes.string.isRequired
  }