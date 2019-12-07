import React, { Component } from 'react';

export default class Button extends Component {
  constructor() {
    super()
    this.state = {
      hover: false 
    }
  }

  toggleHover = () => {
    this.setState({
      hover: !this.state.hover
    })
  }

  render() {
    const styleButton = {
      color: this.props.fontColor,
      width: '50%',
      border: '3px solid black',
      padding: '20px',
      fontSize: '2rem',
      fontWeight: '900',
      textAlign: 'center',
      cursor: 'pointer',
      background: this.state.hover ? this.props.hoverColor : this.props.backgroundColor,
      transition: 'all .3s ease-in-out'
    }

    return (
      <div className={`button ${this.props.action}`} style={styleButton} onMouseOver={this.toggleHover} onMouseLeave={this.toggleHover} onClick={this.props.trigger}>
        {this.props.children}
      </div>
    )
  }
}



