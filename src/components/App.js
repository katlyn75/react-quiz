import React, { Component } from 'react';

export default class App extends Component {

  state = {
    tasks: [
      { 
        text: 'Learn React',
        level: 2
      },
      { 
        text: 'Learn Redux',
        level: 3
      },
      { 
        text: 'Creat Cool Project',
        level: 1
      }
    ]
  };

  render() {
    return (
      <div>
        Quiz FTW!
      </div>
    );
  }
}