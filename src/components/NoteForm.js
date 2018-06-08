import React, { Component } from 'react';
// import PropTypes from 'prop-types';

const defaultState = {
  text: ''
};

export default class NoteForm extends Component {
  state = {
    text: ''
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onComplete(this.state);
    this.setState(defaultState);
  };

  render() {
    const { text } = this.state;

    return (
      <form  onSubmit={this.handleSubmit}>
        <label>
        Note:
          <input name="note-text" value={text} onChange={this.handleChange}/>
        </label>
        <button type="submit">Add</button>
      </form>
    );
  }
}