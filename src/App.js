import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
        <p>{ this.state.status }</p>
      </div>
    );
  }
}

export default App;
