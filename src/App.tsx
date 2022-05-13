import { Dashboard } from '../src/components/Dashboard'
import { Header } from './components/Header/index'
import './styles/global.scss'
import { createServer, Model } from 'miragejs'
import Modal from 'react-modal'
import { useState } from 'react'
import { ModalReact } from './components/Modal'
import { TransactionsProvider } from './components/TransactionsContext'

createServer({
  models: {
    transaction: Model
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'desenvolvimento',
          amount: 1200,
          category: 'salario',
          type: 'deposit',
          createdAt: new Date()
        },
        {
          id: 2,
          title: 'aluguel',
          amount: 700,
          category: 'casa',
          type: 'withdraw',
          createdAt: new Date()
        }
      ]
    })
  },
  routes() {
    this.namespace = 'api'

    this.get('transactions', () => {
      return this.schema.all('transaction')
    })
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data)
    })
  }
})

Modal.setAppElement('#root')

export default function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <ModalReact
        onRequestClose={handleCloseNewTransactionModal}
        isOpen={isNewTransactionModalOpen}
      />
    </TransactionsProvider>
  )
}
