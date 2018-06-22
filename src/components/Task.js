import React, { Component } from 'react';
import propTypes from 'prop-types';
//import styles from './Task.css';

export default class extends Component {

    state = {
      onClick: propTypes.func.isRequired,
      task: PropTypes.array

    }
  
  }

  render() {
    const { task } = this.props;
    const { text, level, onClick} = task;

    return (
      <section className={styles.task}>
        <Task task={ currentTask } onClick={this.handleClick} />
        <h3>{text}</h3>
        <h4>{level}</h4>
      </section>
    );
  }
}