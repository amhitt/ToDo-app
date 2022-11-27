import { configureStore } from "@reduxjs/toolkit";
import todoListReducer from "./todoList-reducer";

const store = configureStore(todoListReducer)

window.store = store

export default store