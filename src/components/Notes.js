import React, { Component } from 'react';
import Note from './Note';
import PropTypes from 'prop-types';

export default class Notes extends Component {

   static = {
     propTypes: {
       notes: PropTypes.array,
     }
   };

   render() {
     const { notes } = this.state;

     return (
       <ul>
         {notes.map(note => (
           <Note key={note.key}
             data={note} />
         ))}
       </ul>  
     );
   }
}