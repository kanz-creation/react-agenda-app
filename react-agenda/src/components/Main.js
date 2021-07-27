import React from 'react';
import TaskList from './TaskList';
import UserTask from './UserTask';

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
  render() {
    return (
      <div>
        <h1> Today Agenda</h1>
        <div>
          <UserTask userTask={this.userTask} />
          <br />
          <TaskList />
        </div>
      </div>
    );
  }
}
