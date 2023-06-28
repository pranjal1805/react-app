import React, {useState} from 'react'

function TodoForm({addTask}) {
    const [value,setValue] = useState("")

    const handleChange = e => {
        setValue(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        addTask(value)
        setValue("")
    }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' value={value} placeholder='Enter Task' className='todo-input' onChange={handleChange}/>
        <button type='submit' className='todo-btn'> Submit </button>
    </form>
  )
}

export default TodoForm