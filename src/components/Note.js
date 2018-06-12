import React, { Component } from 'react';

export default class Note extends Component {
  render() {
    const { date, text } = this.props;

    return (
      <li>
        Date: {date.toLocaleString()}<br/>
        Text: {text}
      </li>
    );
  }
}