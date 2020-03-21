import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      canSubmit: false,
      value: '',
      max: '2020-04-01'
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {

  }
  
  componentDidUpdate(prevProps, prevState) {
    if (prevState.value !== this.state.value) {
      this.setCanSubmit()
    }
  }

  setCanSubmit() {
    if (!this.state.value) {
      if (this.state.canSubmit) {
        this.setState({ canSubmit: false })
      }
    } else if (this.validateMax()) {
      if (!this.state.canSubmit) {
        this.setState({ canSubmit: true })
      }
    } else {
      if (this.state.canSubmit) {
        this.setState({ canSubmit: false })
      }
    }
  }

  validateMax() {
    const { value, max } = this.state
    console.log('validateMax', max , '>=', value, ' = ', max >= value)
    if (max >= value) return true;
    else return false;
  }

  handleChange(value) {
    this.setState({ value })
  }

  handleSubmit() {
    if (this.state.canSubmit) {
      console.log('SUBMIT: ', {
        value: this.state.value
      })
    } else {
      console.log('Cant submit')
    }
  }

  render() {
    return (
      <div className="App">
        <input type="date" max={this.state.max} value={this.state.value} onChange={e => this.handleChange(e.currentTarget.value)} />
        <input type="submit" onClick={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
