import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Note extends Component {
  
  static propTypes = {
    date: PropTypes.object,
    text: PropTypes.string
  };

  render() {

    const { date, text } = this.props;

    return (
      <li>
        <h2>{date.toLocaleString()}</h2>
        <p>{text}</p>
      </li>
    );
  }
}