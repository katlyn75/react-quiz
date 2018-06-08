import React, { Component } from 'react';
import PropTypes from 'prop-types';

const defaultState = {
  text: '',
  date: ''
};

export default class NoteForm extends Component {

  static propTypes = {
    onComplete: PropTypes.func.isRequired,
  };
  
  state = defaultState;

  handleChange = ({ target }) => {
    this.setState({ text: target.value, date: new Date() });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onComplete(this.state);
    this.setState(defaultState);
  };

  render() {
    const { text } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="add Note">
          Note:
          <input name="note" value={text} onChange={this.handleChange}/>
        </label>

        <button type="submit">Add</button>
      </form>
    );
  }
}