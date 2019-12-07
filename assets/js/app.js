import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import Immutable from './components/Immutable/Immutable';
import BillsApp from './components/BillsApp/BillsApp';

class App extends Component {
  constructor() {
    super();
    this.state = {
     
    }
  }

  render() {
    return (
      <div className={'container'}>
        <BillsApp />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));