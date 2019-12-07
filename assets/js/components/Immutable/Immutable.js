import React, { Component } from 'react';
import update from 'immutability-helper';

export default class Immutable extends Component {
  constructor() {
    super()
    this.state = {
      background: 'black',
      names: ['Nathan','Joe', 'James', 'Cindy'],
      teachers: ['Cam', 'Jennifer', 'Loi'],
      both: [],
      user: {
        name: 'Joe',
        age: 25,
        location: 'NYC',
        grades: {
          math: 'A',
          english: 'B',
          science: 'C-',
          gym: 'F'
        }
      }
    }
  }

  clickedBtn = () => {
    console.log(this.state)

    const newTeachers = update(this.state.teachers, {
      $splice: [[2]]
    })

    const newState = update(this.state, {
      teachers: {$set: newTeachers}
    })

    this.setState(newState, () => {
      console.log(this.state)
    });

    console.log('Button has been clicked!');
  }

  changeToActive = () => {
    if(this.state.teachers[2] !== 'Loi') {
      return 'active'
    } else {
      return ''
    }
  }

  render() {
    return (
      <div id="Immutable-comp">
        <div className={`box ${this.changeToActive()}`} />
        <div className="button" onClick={this.clickedBtn}>Press Me!</div>
      </div>
    )
  }
}


