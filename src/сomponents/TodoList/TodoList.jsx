import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteToDo, toggleToDo } from "../../redux/todoList-reducer";
import Task from "./Task/Task";

const ToDoList = () => {
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const onDeleteBut = (id) => {
    dispatch(deleteToDo(id));
  };
  const onToggle = (id) => dispatch(toggleToDo(id));

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const taskList = todos.map((e) => (
    <Task
      id={e.id}
      task={e.task}
      completed={e.completed}
      key={e.id}
      toggle={onToggle}
      delete={onDeleteBut}
    />
  ));

  return <div>{taskList}</div>;
};

export default ToDoList;
