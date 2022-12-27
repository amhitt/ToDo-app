import {createAction, createReducer} from "@reduxjs/toolkit";

const initialState = {
    newTaskText: "",
    todos: [
        {
            id: 1,
            task: "do smth",
            completed: true
        }
    ]
}

export const taskChange = createAction("CHANGE_TASK")
export const deleteAllTasks = createAction("DELETE_ALL_TODOS")
export const addToDO = createAction('ADD_TODO')
export const completeAllTasks = createAction("COMPLETE_ALL_TODOS")
export const deleteToDo = createAction("DELETE_TODO")
export const toggleToDo = createAction("TOGGLE_TODO")


export default createReducer(initialState,
    {
        [addToDO]: function (state) {
            state.todos.push(
                {
                    id: state.todos.length + 1,
                    task: state.newTaskText,
                    completed: false
                })
            state.newTaskText = ""
        },
        [completeAllTasks]: function (state) {
            state.todos.map(todo => {
                todo.completed = true
            })
        },
        [deleteAllTasks]: function (state) {
            state.todos = []
        },
        [deleteToDo]: function (state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        [taskChange]: function (state, action) {
            state.newTaskText = action.payload
        },
        [toggleToDo]: function (state, action) {
            state.todos.map(todo => {
                if (todo.id !== action.payload) {
                    return todo
                }
                return todo.completed = !todo.completed
            })
        }
    })
