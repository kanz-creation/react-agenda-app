import React, { Component } from 'react';

export default class TasksItem extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.tasksItem.task}</td>
        <td>
          <button>Edit</button>
          <button>Delete</button>
        </td>
      </tr>
    );
  }
}
