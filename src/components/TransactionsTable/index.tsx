import { useContext } from 'react'
import { TransactionsContext } from '../TransactionsContext'
import './styles.scss'

export function TransactionsTable() {
  const { transactions } = useContext(TransactionsContext)

  return (
    <table className="TransactionsTableContainer">
      <thead>
        <tr>
          <th>Titulo</th>
          <th>Preço</th>
          <th>Categoria</th>
          <th>Data</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(transaction => {
          return (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>{transaction.createdAt}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
