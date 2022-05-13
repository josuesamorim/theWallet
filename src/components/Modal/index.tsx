import { FormEvent, useContext, useState } from 'react'
import Modal from 'react-modal'
import { Container, MeuButtom } from '../Button/MeuButton'

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

import './styles.scss'
import { TransactionsContext } from '../TransactionsContext'

interface ReactModalProps {
  onRequestClose: () => void
  isOpen: boolean
}

export function ModalReact({ onRequestClose, isOpen }: ReactModalProps) {
  const { createTransaction } = useContext(TransactionsContext)
  const [type, setType] = useState('deposit')
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState('')

  function handleDepositType() {
    setType('deposit')
  }

  function handleWithdrawType() {
    setType('withdraw')
  }

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()
    await createTransaction({
      title,
      amount,
      type,
      category
    })

    setTitle('')
    setAmount(0)
    setCategory('')
    setType('deposit')
    onRequestClose()
  }

  return (
    <div className="ModalContainer">
      <Modal
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        isOpen={isOpen}
        onRequestClose={onRequestClose}
      >
        <button onClick={onRequestClose} className="react-modal-close">
          <img src={closeImg} alt="Close Button" />
        </button>

        <h1>Cadastrar transação</h1>

        <form onSubmit={handleCreateNewTransaction}>
          <input
            id="name"
            type="text"
            placeholder="Titulo"
            value={title}
            onChange={event => setTitle(event.target.value)}
          />

          <input
            id="value"
            type="number"
            placeholder="Valor"
            value={amount}
            onChange={event => setAmount(Number(event.target.value))}
          />

          <div className="react-modal-selector">
            <Container>
              <MeuButtom
                type="button"
                isActive={type === 'deposit'}
                activeColor="green"
                className={type === 'deposit' ? 'active' : ''}
                onClick={handleDepositType}
              >
                <img src={incomeImg} alt="Income" />
                Entrada
              </MeuButtom>

              <MeuButtom
                type="button"
                isActive={type === 'withdraw'}
                activeColor="red"
                className={type === 'withdraw' ? 'active' : ''}
                onClick={handleWithdrawType}
              >
                <img src={outcomeImg} alt="Outcome" />
                Saída
              </MeuButtom>
            </Container>
          </div>
          <input
            id="category"
            type="text"
            placeholder="Categoria"
            value={category}
            onChange={event => setCategory(event.target.value)}
          />
          <button type="submit">Cadastrar</button>
        </form>
      </Modal>
    </div>
  )
}
