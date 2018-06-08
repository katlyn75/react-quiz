import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddNote extends Component {

  render() {

    return (
      <form>
        <input placeholder="text" value="text" onChange={this.handleChange}/>
        <input type="date" placeholder="date" value="date" onChange={this.handleChange}/>
        <button type="submit" >submit</button>
      </form>
    );
  }
}