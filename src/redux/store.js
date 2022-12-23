import {
  legacy_createStore as createStore,
  applyMiddleware
} from "redux";
import todoListReducer from "./todoList-reducer";



const customMiddleWare = store => next => action => {
  if (action.type == "APP_UNMMOUNTED") {
    let setFunction = 
    localStorage.setItem("todos", JSON.stringify(store.getState().todos))
  }
  else if (action.type == "APP_MOUNTED") {
    const tasksFromLocal = JSON.parse(localStorage.getItem("toods"))
    
  }
  next(action);
}

const store = createStore(todoListReducer, applyMiddleware(customMiddleWare))

window.store = store
export default store