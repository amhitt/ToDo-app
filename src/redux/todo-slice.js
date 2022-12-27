import {createSlice} from "@reduxjs/toolkit";


const todoSlice = createSlice({
    name: 'toolkit',
    initialState: {
        newTaskText: "",
        todos: [
            {
                id: 1,
                task: "do smth",
                completed: true
            }
        ]
    },
    reducers: {
        taskChange(state, action) {
            state.newTaskText = action.payload
        },
        addToDO(state) {
            state.todos.push(
                {
                    id: state.todos.length + 1,
                    task: state.newTaskText,
                    completed: false
                })
            state.newTaskText = ""
        },
        completeAllTasks(state) {
            state.todos.map(tod=> {
                todo.completed = true
            })
        },
        deleteAllTasks(state) {
            state.todos = []
        },
        deleteToDo(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        toggleToDo(state, action) {
            state.todos.map(todo => {
                if (todo.id !== action.payload) {
                    return todo
                }
                return todo.completed = !todo.completed
            })
        }
    }

})

export default todoSlice.reducer
export const {taskChange, completeAllTasks, deleteAllTasks, deleteToDo, addToDO, toggleToDo} = todoSlice.actions
//деструктурируем поле actions, которое получаем из slice