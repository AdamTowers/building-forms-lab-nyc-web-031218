import React, { Component } from 'react';

class BandInput extends Component {
  state = {
    text: ''
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_BAND',
      band: this.state.text
    })
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>Add band: </label>
          <input
            type='text'
            value={this.state.text}
            onChange={(event) => this.handleChange(event)} />
          <input type='submit' />
        </form>
      </div>
    );
  }
};

export default BandInput;
