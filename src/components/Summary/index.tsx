import { ReactNode, useContext } from 'react'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { TransactionsContext } from '../TransactionsContext'

import './styles.scss'

interface Types {
  accWithdraws: ReactNode
  accDeposits: ReactNode
}

export function Summary() {
  const { transactions } = useContext(TransactionsContext)

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'deposit') {
        acc.deposit += transaction.amount
        acc.total += transaction.amount
      } else {
        acc.withdraw += transaction.amount
        acc.total -= transaction.amount
      }
      return acc
    },
    {
      deposit: 0,
      withdraw: 0,
      total: 0
    }
  )

  return (
    <div className="SummaryContainer">
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Income" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.deposit)}
        </strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Outcome" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.withdraw)}
        </strong>
      </div>

      <div>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.total)}
        </strong>
      </div>
    </div>
  )
}
