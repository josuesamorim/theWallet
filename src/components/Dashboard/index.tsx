import { Summary } from '../Summary'
import { TransactionsTable } from '../TransactionsTable'

import './styles.scss'

export function Dashboard() {
  return (
    <div className="DashboardContainer">
      <Summary />
      <TransactionsTable />
    </div>
  )
}
