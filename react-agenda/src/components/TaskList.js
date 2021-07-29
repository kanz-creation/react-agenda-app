import React, { Component } from 'react';
import TasksItem from './TasksItem';
import { TableRow } from '@material-ui/core';
import { Table } from '@material-ui/core';
import { TableHead } from '@material-ui/core';
import { TableBody } from '@material-ui/core';
import { TableCell } from '@material-ui/core';
import { Typography } from '@material-ui/core';

export default class taskList extends Component {
  render() {
    return (
      <Table style={{ width: 400, margin: 'auto' }}>
        <TableHead>
          <TableRow>
            <TableCell>Task</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.props.tasks.map((task, index) => (
            <TasksItem
              key={index}
              tasksItem={task}
              id={index}
              deleteTask={this.props.deleteTask}
            />
          ))}
        </TableBody>
      </Table>
    );
  }
}
