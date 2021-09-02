import React, {Component} from 'react'

class TodoForm extends Component {
  constructor(){
    super()
    this.state = {}
  }
  
  render() {
    return (
      <div>
        <form>
          <input type='text' placeholder='...todo' />
          <button>Add Todo</button><button>Clear Completed</button>
        </form>
      </div>
    )
  }
}

export default TodoForm