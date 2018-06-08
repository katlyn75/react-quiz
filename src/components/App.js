import React, { Component } from 'react';
import Notes from './Notes';
import NoteForm from './NoteForm';

export default class App extends Component {

  state = {
    notes: [
      { 
        date: new Date('2/12/2018'),
        text: 'Learn React'
      },
      { 
        date: new Date('2/27/2018'),
        text: 'Learn Redux'
      },
      { 
        date: new Date('3/23/2018'),
        text: 'Creat Cool Project'
      }
    ]
  };

  handleAdd = note => {
    this.setState(({ notes }) => {
      notes.push(note);
      return { notes };
    });
  };

  render() {
    const { notes } = this.state;
    return (
      <div>
        <h1>Notes</h1>
        <NoteForm onComplete={this.handleAdd} label="Add"/>
        <Notes notes={notes}/>
      </div>
    );
  }
}