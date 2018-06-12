import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Note extends Component {

  static propTypes = {
    note: PropTypes.object
  };

  render() {

    const { note } = this.props;
    const { text, date } = note;

    return (
      <li key={text}>
        <p className="date">Added on: {date.toLocaleString()}</p>
        <p>{text}</p>
      </li>
    );
  }
}