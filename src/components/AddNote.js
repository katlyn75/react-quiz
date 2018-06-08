import React, { Component } from 'react';

export default class AddNote extends Component {
  state = {
    note: ''
  }

  handleChange = ({ target }) => {
    this.setState({ note: target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const timestamp = new Date();
    this.props.onAdd(this.state, timestamp);
  };

  render() {
    const { note } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={note} onChange={this.handleChange}/>
        <button type="submit">ADD</button>
      </form>
    );
  }
}