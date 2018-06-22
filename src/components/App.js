import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Task from './Task';

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
        text: 'Create Cool Project',
        level: 1
      }
    ]
  };

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/" component={Task}/>
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    );
  }
}