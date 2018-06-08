import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Notes extends Component {

   static = {
     propTypes: {
       data: PropTypes.object,
     }
   };

   render() {
     const { data } = this.state;

     return (
       <li>
         <span>Added: {data.date} </span>
         <p> {data.text}</p>
       </li>  
     );
   }
}