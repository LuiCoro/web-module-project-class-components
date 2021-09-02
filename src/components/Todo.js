import React from 'react'

const Todo = (props) => {
  
  const {data} = props
  console.log(data)
  
  return (
    <div>
      {
        data.map(item => {
          return (
            <h3 key={item.id}>{item.task}</h3>
          )
        })
      }
    </div>
  )
}

export default Todo