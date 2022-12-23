const ADD_TODO = "ADD_TODO";
const CHANGE_TASK = "CHANGE_TASK"
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const COMPLETE_ALL_TODOS = "COMPLETE_ALL_TODOS"
const DELETE_ALL_TODOS = "DELETE_ALL_TODOS"


let initialState = {
  newTaskText: "",
  todos: [
    {id: 1,
    task: "do smth",
    completed: true  
  }
  ]
}

const todoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TASK: {
      return {
        ...state,
        newTaskText: action.newText
      }
    }
    case ADD_TODO: {
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: state.todos.length + 1,
            task: state.newTaskText,
            completed: false
          }
        ],
        newTaskText: ""
      }
    }
    case DELETE_TODO: {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id != action.id)
      }
    }
    case TOGGLE_TODO: {
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id !== action.id) {
            return todo
          }
          return {
            ...todo,
            completed: !todo.completed
          }
        })
      }
    }
    case DELETE_ALL_TODOS: {
      return {
        ...state,
        todos: []
      }
    }
    case COMPLETE_ALL_TODOS: {
      return {
        ...state,
        todos: state.todos.map(todo => ({
          ...todo,
          completed: true
        }))
      }
    }
    default:
      return state
  }
}

export const taskChange = (newText) => ({
  type: "CHANGE_TASK",
  newText
})
export const addToDO = () => ({
  type: "ADD_TODO"
});
export const deleteAllTasks = () => ({
  type: "DELETE_ALL_TODOS"
});
export const completeAllTasks = () => ({
  type: "COMPLETE_ALL_TODOS"
});
export const deleteToDo = (id) => ({
  type: "DELETE_TODO",
  id
});
export const toggleToDo = (id) => ({
  type: "TOGGLE_TODO",
  id
});

export default todoListReducer