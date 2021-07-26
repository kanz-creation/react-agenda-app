import React from 'react';
import TaskList from './TaskList';
import UserTask from './UserTask';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allTasks: [],
    };
  }

  render() {
    return (
      <div>
        <h1> Today Agenda</h1>
        <div>
          <UserTask />
          <br />
          <TaskList />
        </div>
      </div>
    );
  }
}
