import logoImg from '../../assets/logo.svg'
import './styles.scss'

interface ModalProps {
  onOpenNewTransactionModal: () => void
}

export function Header({ onOpenNewTransactionModal }: ModalProps) {
  return (
    <div className="HeaderContainer">
      <header className="HeaderContent">
        <h1>The Wallet</h1>
        {/* <img src={logoImg} alt="The Wallet Logo" /> */}
        <button onClick={onOpenNewTransactionModal}>Nova Transação</button>
      </header>
    </div>
  )
}
