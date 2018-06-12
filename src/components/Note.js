import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Note extends Component {

    static propTypes = {
      text: PropTypes.string,
      date: PropTypes.date
    }; 

    render() {
      const { text, date } = this.props;

      return (
        <li>
          <h3>Note from <span>{date.toLocaleString()}</span></h3>
          <p>{text}</p>
        </li>
      );
    }
}