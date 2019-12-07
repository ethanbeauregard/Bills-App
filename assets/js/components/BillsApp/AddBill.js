import React, { Component } from 'react';

export default class AddBill extends Component {
  constructor() {
    super()
    this.state = {
      business_name: '',
      price: 0,
      status: ''
    }
  }

  inputChange = (event) => {
    const name = event.target.name;
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
    
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      business_name: '',
      price: 0
    })
    this.props.saveBill(this.state)
    console.log(this.state)
  }

  render() {
    return (
     <section id="AddBill" className={`${this.props.addBillOpen == true ? 'active' : ''}`}>
       <div className="container">
         <h2>Add Bill</h2>
         <form onSubmit={this.handleSubmit}>
           <div className="form-group">
            <label htmlFor="business_name">Business Name</label>
            <input type="text" id="business_name" name="business_name" onChange={this.inputChange} value={this.state.business_name}></input>
           </div>
           <div className="form-group">
            <label htmlFor="price">Price</label>
            <input type="text" id="price" name="price" onChange={this.inputChange} value={this.state.price}></input>
           </div>
           <button type="submit">Save</button>
         </form>
       </div>
     </section>
    )
  }
}


