import React from 'react'
import Todo from './Todo'

const TodoList = (props) => {
  const handleClick = () => {
    props.handleTaskCompleted()
  }
  return (
    <div>
      {
        props.data.map(item => (
          <Todo key={item.id} item={item} handleTaskToggle={props.handleTaskToggle} />
        ))
      }
    </div>
  )
}

export default TodoList