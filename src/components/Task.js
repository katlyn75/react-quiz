import React, { Component } from 'react';
import propTypes from 'prop-types';
//import styles from './Task.css';

export default class extends Component {

    state = {
      onClick: propTypes.func.isRequired,
      task: PropTypes.array

    }
  
  }
  
    return (
      <a href="#" onClick={handleClick}>
        Click me
      </a>
    );
  

  render() {
    const { task } = this.props;
    const { text, level, onClick} = task;

    return (
      <section className={styles.task}>
        <button onClick={deleteTask}>
        <Task task={ currentTask } onClick={this.handleClick} />
        <h3>{text}</h3>
        <h4>{level}</h4>
        </button>
      </section>
    );
  }
}