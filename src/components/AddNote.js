import React, { Component } from 'react';
import PropTypes from 'prop-types';

const defaultState = {
  text: '',
  date: ''
};

export default class AddNote extends Component {

    handleChange = ({ target }) => {
      this.setState({ [target.placeholder]: target.value });
    };
    
    handleSubmit = event => {
      event.preventDefault();
      this.props.onComplete(this.state);
      this.setState(defaultState);
    };

    render() {


      return (
        <form onSubmit={this.handleSubmit}>
          <input placeholder="text" value="text" onChange={this.handleChange}/>
          <input type="date" placeholder="date" value="date" onChange={this.handleChange}/>
          <button type="submit" >submit</button>
        </form>
      );
    }
}