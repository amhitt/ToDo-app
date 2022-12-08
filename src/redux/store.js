import { legacy_createStore as createStore } from "redux";
import todoListReducer from "./todoList-reducer";


const store = createStore(todoListReducer)

window.store = store
export default store