import './index.css'

const MoneyDetails = props => {
  const {income, expenses} = props
  const balance = income - expenses
  return (
    <div className="income-expense-con">
      <div className="amount-con balance">
        <div className="img-con">
          <img
            className="img"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
          />
        </div>
        <div className="display-amount-con">
          <p className="amount-heading">Your Balance</p>
          <p className="display-amount" data-testid="balanceAmount">
            Rs {balance}
          </p>
        </div>
      </div>
      <div className="amount-con income">
        <div className="img-con">
          <img
            className="img"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
          />
        </div>
        <div className="display-amount-con">
          <p className="amount-heading">Your Income</p>
          <p className="display-amount" data-testid="incomeAmount">
            Rs {income}
          </p>
        </div>
      </div>
      <div className="amount-con expense">
        <div className="img-con">
          <img
            className="img"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
          />
        </div>
        <div className="display-amount-con">
          <p className="amount-heading">Your Expenses</p>
          <p className="display-amount" data-testid="expensesAmount">
            Rs {expenses}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
