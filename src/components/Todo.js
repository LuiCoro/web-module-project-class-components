import React from 'react'

const Todo = (props) => {
  
  const handleClick = () => {
    props.handleTaskToggle(props.item.id)
  }
  
  return (
    <div>
      <h3>{props.item.task}</h3>
    </div>
  )
}

export default Todo