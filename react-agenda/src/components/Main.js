import React from 'react';
import TaskList from './TaskList';
import UserTask from './UserTask';
import QuoteGenerator from './QuoteGenerator';
import { Button } from '@material-ui/core';
import { Typography } from '@material-ui/core';
const tasks = [];
export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: tasks,
    };
  }
  //pass task as a parameter
  userTask = (task) => {
    if (task.trim() === '') {
      alert('Task should not be empty');
      return;
    }
    //task added to list, by default, the task is not completed
    tasks.push({ task, isCompleted: false });
    //changes reflted in UI
    this.setState({ tasks: tasks });
  };

  deleteTask = (taskId) => {
    tasks.splice(taskId, 1);
    this.setState({ tasks: tasks });
  };

  render() {
    return (
      <div>
        <Typography align="center" variant="h2">
          Agenda
        </Typography>
        <div>
          <UserTask userTask={this.userTask} />
          <br />
          <TaskList tasks={this.state.tasks} deleteTask={this.deleteTask} />
        </div>
        <div>
          <QuoteGenerator />
        </div>
      </div>
    );
  }
}
