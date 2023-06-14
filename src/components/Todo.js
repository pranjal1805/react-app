import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import moment from 'moment';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => {
    const n = 10000; // Size of the array
    const array = Array(n).fill(-1);
    if(array[index]===-1)
    {
      array[index]= moment(todo.timestamp).format('MMMM Do YYYY, h:mm:ss a');
      console.log(array[index])
      console.log(index)
    }
    
    return (
      <div
        className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
        key={index}
      >
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
          {todo.text}
        </div>
        <div className='timestamp'>
          {array[index]}
        </div>
        <div className='icons'>
          <RiCloseCircleLine
            onClick={() => removeTodo(todo.id)}
            className='icons icons--delete-icon'
          />
          <TiEdit
            onClick={() => setEdit({ id: todo.id, value: todo.text })}
            className='icons--edit-icon'
          />
        </div>
      </div>
    );
  });
};

export default Todo;
