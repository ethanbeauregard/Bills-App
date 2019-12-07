import React, { Component } from 'react';
import Button from './Button';

export default class Counter extends Component {
  constructor() {
    super()
    this.state = {
      currentNumber: 0,
      status: 'manual'
    }
  }

  clickedAdd = () => {
    // this.setState({
    //   currentNumber: this.state.currentNumber + 1
    // });

    this.state.currentNumber = this.state.currentNumber + 1;
  }

  clickedMinus = () => {
    this.setState({
      currentNumber: this.state.currentNumber - 1
    })
  }

  counterRun = () => {
    setInterval(() => {
      this.setState({
        currentNumber: this.state.currentNumber + 1
      });
    }, 1000)
  }

  componentWillMount() {
    console.log('component will mount')
  }

  componentDidMount() {
    if(this.props.status == 'auto') {
      this.setState({
        status: this.props.status
      }, () => {
        this.counterRun()
      });
    }
  }

  render() {
    const styleCounterComp = {
      width: '100%',
      maxWidth: '400px',
      margin: '0 auto'
    }
    
    const styleNumber = {
      border: '3px solid black',
      padding: '20px',
      fontSize: '2rem',
      fontWeight: '900',
      textAlign: 'center'
    }
    
    const styleButtons = {
      display: this.props.status =='auto' ? 'none' : 'flex'
    }

    return (
      <div id="counter-comp" style={styleCounterComp}>
        <div className="Number" style={styleNumber}>0
          {this.state.currentNumber}
        </div>
        <div className="buttons" style={styleButtons}>
          <Button action="minus" hoverColor="red" backgroundColor="black" fontColor="white" trigger={this.clickedMinus}>-</Button>
          <Button action="plus" hoverColor="purple" backgroundColor="white" fontColor="black" trigger={this.clickedAdd}>+</Button>
        </div>
      </div>
    )
  }
}


