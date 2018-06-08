import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Note from './Note';


export default class Notes extends Component {
  
  static propTypes = {
    notes: PropTypes.array.isRequired
  };

  render() {
    
    const { notes } = this.props;
    return (
      <div>
        <ul>
          {notes.map(note => <Note key={note.text} {...note}/>)}
        </ul>
      </div>
    );
  }
}