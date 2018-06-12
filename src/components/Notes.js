import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Note from './Note';
// import NoteForm from './NoteForm';


export default class Notes extends Component {

  static propTypes = {
    notes: PropTypes.array.isRequired
  };


  render() {
    const { notes } = this.props;

    return (
      <div>
        <h1>Notes!</h1>
        <ul>
          {notes.map(note => <Note
            key={note.text}
            note={note}
          />)}
        </ul>
        {/* <NoteForm onComplete={}/> */}
      </div>
    );
  }
}