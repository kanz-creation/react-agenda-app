import React, { Component } from 'react';

export default class TasksItem extends Component {
  //passing parameter to parent
  deleteTask = () => {
    this.props.deleteTask(this.props.id);
  };

  render() {
    return (
      <tr>
        <td>{this.props.tasksItem.task}</td>
        <td>
          <button>Edit</button>
          <button className="delete" onClick={this.deleteTask}>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
