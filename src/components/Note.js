import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Notes extends Component {

   static = {
     propTypes: {
       data: PropTypes.object,
     }
   };

   render() {
     const { data } = this.props;
     let date = data.date ? data.date.toString() : null;

     return (
       <li>
         <p> {data.text}</p>
         <span>Added: {date} </span>
       </li>  
     );
   }
}