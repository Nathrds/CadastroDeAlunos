// import React from 'react'
import { AlunosTable } from "./AlunosTable"

export const TablePage = () => {
    const alunos = [
        {id: 1, nome:'Ana Pereira da Silva Carvalho', email: 'ana.banana@gmail.com', endereco: 'Rua do Ovo, numero 0, Asa Sul 913' },
        {id: 1, nome:'Marcelo Ferreira Peralta', email: 'marcelo-peralta@hotmail.com', endereco: 'Rua 04, numero 2, Sudoeste' },
    ]

  return (
    <div>
        <h1>Lista de Alunos</h1>
        <AlunosTable alunos={alunos} />
    </div>
  )
}
