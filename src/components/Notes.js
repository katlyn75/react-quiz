import React, { Component } from 'react';
import Note from './Note';

export default class Notes extends Component {



  render() {
    return (
      <div className = "list-container">
        <ul>
          <Note />
        </ul>
      </div>
    );
  }

}