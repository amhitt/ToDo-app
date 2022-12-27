import {
    legacy_createStore as createStore,
    applyMiddleware
} from "redux";
import todoListReducer from "./todoList-reducer";
import {getFunction, setFunction} from "./localStorage";
import {configureStore} from "@reduxjs/toolkit";
import toolkitReducer from "./toolkit-reducer";
import todoSlice from "./todo-slice";


const customMiddleWare = store => next => action => {
    JSON.parse(localStorage.getItem("todos"))
    if (action.type === "APP_UNMOUNTED") {

        console.log(action)

    } else if (action.type === "APP_MOUNTED") {
       // store.getState().todos = JSON.parse(localStorage.getItem("todos"))
        console.log(action)
    }
    next(action);
}


export const store = createStore(todoListReducer, applyMiddleware(customMiddleWare))

export const store2 = configureStore({
    reducer: todoSlice
})
window.store = store
