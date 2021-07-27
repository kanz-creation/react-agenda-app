import React, { Component } from 'react';
import TasksItem from './TasksItem';
import { Button } from '@material-ui/core';
export default class taskList extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {this.props.tasks.map((task, index) => (
            <TasksItem
              key={index}
              tasksItem={task}
              id={index}
              deleteTask={this.props.deleteTask}
            />
          ))}
        </tbody>
      </table>
    );
  }
}
