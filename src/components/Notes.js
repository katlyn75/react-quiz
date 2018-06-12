import React, { Component } from 'react';
import Note from './Note';

export default class Notes extends Component {
  render() {
    const { notes } = this.props;

    return (
      <ul>
        {notes.map(note => <Note key={note.date} {...note}/>)}
      </ul>
    );
  }
}