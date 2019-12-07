import React, { Component } from 'react';

export default class AllBills extends Component {
  constructor() {
    super()
    this.state = {
      
    }
  }

  showAllBills = () => {
    const bills = this.props.allBills

    if(bills.length > 0) {
      return bills.map((bill, index) => {
        return(
          <li className={`bill ${bill.status == 'paid' ? 'active' : ''}`} key={index}>
            <div className="company">
              <div className="logo">
                <img src="/img/billsapp/airbnb-logo.png" />
              </div>
              <div className="title">{bill.business_name}</div>
            </div>
            <div className="price">-${bill.price}</div>
            <div className="buttons">
              <div className="paid" onClick={this.props.changeBillStatus.bind(null, index)}>
                <i className="fas fa-check"></i>
              </div>
              <div className="delete" onClick={this.props.deleteBill.bind(null, index)}>
                <i className="fas fa-trash-alt"></i>
              </div>
            </div>
          </li>
        )
      })
    } else {
      return(
        <li className="bill">
          <div className="no-bills">No Bills, Please Add a Bill</div>
        </li>
      )
    }
  }

  billsTotalAmount = () => {
    const bills = this.props.allBills
    let total = 0

    for(var i = 0; i < bills.length; i++){
      total += parseInt(bills[i].price)
    }

    if(bills.length > 0) {
      return total
    } else {
      return 0
    }
  }

  render() {
    return (
      <section id="AllBills">
        <div className="container">
          <div className="total-bills">
            <div className="text">Total Amount: </div>
            <div className="number">${this.billsTotalAmount()}</div>
          </div>
          <ul className="bills-list">
            {this.showAllBills()}
          </ul>
        </div>
      </section>
    );
  }
}