import React, { useState } from 'react';

export const addTodo = (list, item) => [item, ...list]

export const addTodo1 = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    //Here we add our tasks to an array of already exisisting tasks
    const newTodos = [todo, ...todos];
  
    setTodos(newTodos);
    console.log(...todos);
};

export const randomId = () => Math.floor(Math.random() * 100000)

export const toggleTodo = (todo) => ({ ...todo, isComplete: !todo.isComplete })

export const updateTodo = (list, updatedItem) => { 
    const updatedIndex = list.findIndex(item => item.id === updatedItem.id)

    return [
        ...list.slice(0, updatedIndex),
        updatedItem,
        ...list.slice(updatedIndex + 1)
    ]
}

export const removeTodo = (list, todoId) => {
    const todoIndex = list.findIndex(item => item.id === todoId)
    return [
        ...list.slice(0, todoIndex),
        ...list.slice(todoIndex + 1)
    ]
}

export const search = (id, list) => list.find(item => item.id === id)
