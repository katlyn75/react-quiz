import React, { Component } from 'react';

export default class Note extends Component {


  render() {

    const { date, text } = this.props.note;

    return (
      <li>
        <p>{text}</p>
        <p>Created on:{date.toLocaleString()}</p>
      </li>
    );
  }
}