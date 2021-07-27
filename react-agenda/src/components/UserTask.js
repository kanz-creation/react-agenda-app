import React, { Component } from 'react';
import { Button } from '@material-ui/core';
export default class userTask extends Component {
  // call props cuz = ensure this.propers is set before constructor exists
  constructor(props) {
    // cant use this, reference to parent Component, helps to avoid errors
    super(props);
    //now its okay
    this.state = {
      task: '',
    };
  }
  //this function is for Allowing you to type into the box, handleChange will notice the changes
  handleChange = (event) => {
    //retrieves value of whatever input it was called on
    this.setState({ task: event.target.value });
  };

  //function allows not to be refreshed by using default value
  handleSubmit = (event) => {
    event.preventDefault();
    //need to pass user tasks to all classes and not just here
    this.props.userTask(this.state.task);
    this.setState({ task: '' });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Please enter your task"
          value={this.state.task}
          onChange={this.handleChange}
          autoFocus
        ></input>
        <button type="submit">Add Tasks</button>
      </form>
    );
  }
}
