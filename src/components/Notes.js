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
     const { notes } = this.props;

     return (
       <ul>
         {notes.map((note, index) => (
           <Note key={index}
             data={note} />
         ))}
       </ul>  
     );
   }
}