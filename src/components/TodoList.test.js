import React from 'react'
import renderer from 'react-test-renderer'
import TodoList from './TodoList'
import { addTodo, addTodo1, randomId, toggleTodo, updateTodo, removeTodo, search } from './TodoHelperFunctions'
import { addTodoFunction } from './TodoList'

test('addTodo should add a task to the list', ()=>{
    const startTodos = [
        { id: 1, name: 'one', isComplete: false },
        { id: 2, name: 'two', isComplete: false }
    ]

    const newTodo = { id: 3, name: 'three', isComplete: false }

    const expected = [
        { id: 3, name: 'three', isComplete: false },
        { id: 1, name: 'one', isComplete: false },
        { id: 2, name: 'two', isComplete: false }
    ]

    const result = addTodo(startTodos, newTodo)
    
    expect(result).toEqual(expected)
})

test('addTodo should not change the original order of the array', () => { 
    const startTodos = [
        { id: 1, name: 'one', isComplete: false },
        { id: 2, name: 'two', isComplete: false }
    ]

    const newTodo = { id: 3, name: 'three', isComplete: false }
    
    const expected = [
        { id: 1, name: 'one', isComplete: false },
        { id: 2, name: 'two', isComplete: false },
        { id: 3, name: 'three', isComplete: false }
    ]
 
    const result = addTodo(startTodos, newTodo)

    expect(result).not.toBe(startTodos)
})

test('Search should return an item present in the array', () => { 
    const startTodos = [
        { id: 1, name: 'one', isComplete: false },
        { id: 2, name: 'two', isComplete: false },
        { id: 3, name: 'three', isComplete: false }
    ]

    const expected = { id: 2, name: 'two', isComplete: false }

    const result = search(2, startTodos)

    expect(result).toEqual(expected)
})

test('this function toggles between complete and not complete', () => {
    const startTodo = { id: 1, name: 'one', isComplete: false }
    const expected = { id: 1, name: 'one', isComplete: true }

    const result = toggleTodo(startTodo)

    expect(result).toEqual(expected)
})

test('toggleTodo should not change the list of tasks', () => { 
    const startTodo = { id: 1, name: 'one', isComplete: false }
    const result = toggleTodo(startTodo)

    expect(result).not.toBe(startTodo)
})

test('updateTodo updates the tasks', () => { 
    const startTodos = [
        { id: 1, name: 'one', isComplete: false },
        { id: 2, name: 'two', isComplete: false },
        { id: 3, name: 'three', isComplete: false }
    ]

    const updatedTodo = { id: 2, name: 'two', isComplete: true }

    const expectedTodo = [
        { id: 1, name: 'one', isComplete: false },
        { id: 2, name: 'two', isComplete: true },
        { id: 3, name: 'three', isComplete: false }
    ]

    const result = updateTodo(startTodos, updatedTodo)

    expect(result).toEqual(expectedTodo)
})

test('updateTodo shouldn\'t change the ordering of the array', () => { 
    const startTodos = [
        { id: 1, name: 'one', isComplete: false },
        { id: 2, name: 'two', isComplete: false },
        { id: 3, name: 'three', isComplete: false }
    ]

    const updatedTodo = { id: 2, name: 'two', isComplete: true }

    const result = updateTodo(startTodos, updatedTodo)

    expect(result).not.toBe(startTodos)
})

test('Used for deletion', () => {
    const startTodos = [
        { id: 1, name: 'one', isComplete: false },
        { id: 2, name: 'two', isComplete: false },
        {id: 3, name: 'three', isComplete: false}
    ]

    const expected = [
        { id: 1, name: 'one', isComplete: false },
        {id: 3, name: 'three', isComplete: false}
    ]

    const result = removeTodo(startTodos, 2)

    expect(result).toEqual(expected)
})

test('removeTodo shouldn\'t change the ordering', () => { 
    const startTodos = [
        { id: 1, name: 'one', isComplete: false },
        { id: 2, name: 'two', isComplete: false },
        {id: 3, name: 'three', isComplete: false}
    ]

    const expected = [
        { id: 1, name: 'one', isComplete: false },
        {id: 3, name: 'three', isComplete: false}
    ]

    const result = removeTodo(startTodos, 2)

    expect(result).not.toBe(expected)
})