import './index.css'

const TransactionItem = props => {
  const {transactionDetails, onDeleteTransaction} = props
  const {id, title, amount, type} = transactionDetails
  const deleteTransaction = () => {
    onDeleteTransaction(id)
  }
  return (
    <li className="transaction-item">
      <p>{title}</p>
      <p>{amount}</p>
      <p>{type}</p>
      <div>
        <button
          className="btn"
          onClick={deleteTransaction}
          data-testid="delete"
        >
          <img
            className="delete-img"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
