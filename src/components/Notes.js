import React, { Component } from 'react';
import Note from './Note';

export default class Notes extends Component {



  render() {

    const { note } = this.props;
    return (
      <div className = "list-container">
        <ul>
          {note.map((note, i) => {
            return <Note key={i} note={note} />;
          })}
        </ul>
      </div>
    );
  }

}