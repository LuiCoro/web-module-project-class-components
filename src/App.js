import React from 'react';

import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const todoTasks = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  },
  {
    task: 'Mow Lawn',
    id: 1528817084360,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: todoTasks
    }
  }
  
  handleTaskAdd = (name) => {
    const tasks = {
      task: name,
      id: Date.now(),
      completed: false
    }
    
    const newTaskList = [...this.state.tasks, tasks]
    this.setState({
      tasks: newTaskList
    })
  }
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList data={this.state.tasks}/>
        <TodoForm handleTaskAdd={this.handleTaskAdd}/>
      </div>
    );
  }
}

export default App;
