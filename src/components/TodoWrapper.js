import React, {useState} from 'react'
import TodoForm from './TodoForm'
import {v4 as uuidv4} from 'uuid'
import Todo from './Todo'
import EditTodoForm from './EditTodoForm'
import Moment from 'moment'
uuidv4()

function TodoWrapper() {
   
    const [todos, setTodos] = useState([])
    const [filterMode, setFilterMode] = useState(0)

    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const d = new Date()
    const curDate = Moment(d.toLocaleDateString()).format('DD/MM/YYYY')
    const curDay = weekday[d.getDay()]
    
    const addTask = value => {
        if (!value || /^\s*$/.test(value)) {
            return;
        }
        const curTime = d.toLocaleTimeString([],{hour12: false, hour: "2-digit", minute: "2-digit"})
        setTodos([...todos, {id: uuidv4(), task: value, completed: false, isEditing: false, time: curTime}])        
    }

    const toggleComplete = task_id => {
        setTodos(todos.map(todo => (todo.id === task_id) ? {...todo, completed: !todo.completed} : todo))
    }

    const deleteTask = task_id => {
        setTodos(todos.filter(todo => (todo.id !== task_id)))
    }

    const editTask = task_id => {
        setTodos(todos.map(todo => (todo.id === task_id) ? {...todo, isEditing: !todo.isEditing} : todo))
    }

    const editTodo = (value,task_id) => {
        const newTime = d.toLocaleTimeString([],{hour12: false, hour: "2-digit", minute: "2-digit"})
        setTodos(todos.map(todo => (todo.id === task_id) ? ({...todo, task: value, isEditing: !todo.isEditing, time: newTime}) : todo))
    }

    const setFilterAll = () => {
        setFilterMode(0)
    }

    const setFilterComplete = () => {
        setFilterMode(1)
    }

    const setFilterIncomplete = () => {
        setFilterMode(2)
    }

    const showTodos = (todo,index) => {
        if (todo.isEditing)
        {
            return <EditTodoForm editTodo={editTodo} task={todo}/>
        }
        else 
        {
            return <Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTask={deleteTask} editTask={editTask}/>
        }
    }

    const myFilter = (todo) => {
        switch (filterMode) {
            case 0:
                return true;
            case 1:
                return (todo.completed === true);
            case 2:
                return (todo.completed === false);
            default:
                return false;
        }
    }

  return (
    <div className='TodoWrapper'>
        <h5 className='date'>
            {curDate}, {curDay} 
        </h5>
        <h1>
            To-Do List
        </h1>
        <TodoForm addTask={addTask}/>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between"}}>
            <button className='btn-all' onClick={setFilterAll}>
                All
            </button>
            <button className='btn-complete' onClick={setFilterComplete}>
                Completed
            </button>
            <button className='btn-incomplete' onClick={setFilterIncomplete}>
                Incomplete
            </button>
        </div>
        {todos.filter(myFilter).map(showTodos)}
    </div>
  )
}

export default TodoWrapper