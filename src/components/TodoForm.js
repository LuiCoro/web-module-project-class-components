import React, {Component} from 'react'

class TodoForm extends Component {
  constructor() {
    super()
    this.state = {
      inputValue: '',
    }
  }
  
  inputChanges = (event) => {
    this.setState({ inputValue: event.target.value})
  }
  
  submitChanges = (event) => {
    event.preventDefault()
    this.props.handleTaskAdd(this.state.inputValue)
    this.setState({inputValue: ''})
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.submitChanges}>
          <input value={this.state.inputValue} onChange={this.inputChanges} type='text' placeholder='...todo' name='task'/>
          <button>Add Todo</button>
          <button>Clear Completed</button>
        </form>
      </div>
    )
  }
}

export default TodoForm