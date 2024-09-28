import {Component} from 'react'
import {v4} from 'uuid'

import './index.css'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {transactionList: [], title: '', amount: '', type: ''}

  addTransaction = event => {
    event.preventDefault()
    const {title, amount, type} = this.state
    this.setState(prevState => ({
      transactionList: [
        ...prevState.transactionList,
        {id: v4(), title, amount, type},
      ],
      title: '',
      amount: '',
    }))
  }

  onTitle = event => {
    this.setState({title: event.target.value})
  }

  onAmount = event => {
    this.setState({amount: parseInt(event.target.value)})
  }

  onSelectOption = event => {
    console.log(event.target.value)
    this.setState({type: event.target.value})
  }

  onDeleteTransaction = id => {
    const {transactionList} = this.state
    const deleteIndex = transactionList.findIndex(
      eachobject => eachobject.id === id,
    )
    transactionList.splice(deleteIndex, 1)
    this.setState({transactionList})
  }

  render() {
    const {transactionList, title, amount} = this.state
    return (
      <div className="bg-con">
        <div className="banner">
          <h1 className="heading">Hi,Richard</h1>
          <p className="welcome">
            Welcome back to your
            <span className="welcome-subtext"> Money Manager</span>
          </p>
        </div>
        <MoneyDetails transactionlist={transactionList} />
        <div className="input-history-transaction-con">
          <form className="transaction-form" onSubmit={this.addTransaction}>
            <h1 className="transaction-heading">Add Transaction</h1>
            <label htmlFor="title">TITLE</label>
            <br />
            <input
              className="input"
              value={title}
              id="title"
              type="text"
              onChange={this.onTitle}
              placeholder="TITLE"
            />
            <br />
            <label htmlFor="amount">AMOUNT</label>
            <br />
            <input
              className="input"
              value={amount}
              id="amount"
              type="text"
              onChange={this.onAmount}
              placeholder="AMOUNT"
            />
            <br />
            <label htmlFor="type">TYPE</label>
            <br />
            <select id="type" onChange={this.onSelectOption}>
              {transactionTypeOptions.map(eachOption => (
                <option id={eachOption.optionId} value={eachOption.optionId}>
                  {eachOption.displayText}
                </option>
              ))}
            </select>
            <br />
            <button className="btn" type="submit">
              Add
            </button>
          </form>
          <div className="history-con">
            <p className="history-heading">History</p>
            <ul className="transaction-con">
              <li className="list-header">
                <p>Title</p>
                <p>Amount</p>
                <p>Type</p>
              </li>
              {transactionList.map(eachobject => (
                <TransactionItem
                  key={eachobject.id}
                  transactionDetails={eachobject}
                  onDeleteTransaction={this.onDeleteTransaction}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
