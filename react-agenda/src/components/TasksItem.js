import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { ButtonGroup } from '@material-ui/core';

import { TableRow } from '@material-ui/core';
import { TableCell } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Box } from '@material-ui/core/Box';

export default class TasksItem extends Component {
  //passing parameter to parent

  deleteTask = () => {
    this.props.deleteTask(this.props.id);
  };

  render() {
    return (
      <TableRow>
        <TableCell>{this.props.tasksItem.task}</TableCell>
        <TableCell>
          <ButtonGroup variant="text">
            <Button variant="contained" color="primary">
              Edit
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className="delete"
              onClick={this.deleteTask}
            >
              Delete
            </Button>
          </ButtonGroup>
        </TableCell>
      </TableRow>
    );
  }
}
