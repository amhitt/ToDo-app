import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteToDo, toggleToDo } from "../../redux/todoList-reducer";
import Task from "./Task/Task";

const ToDoList = () => {
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteToDo(id));
  };
  const onToggle = (id) => dispatch(toggleToDo(id));

  return (
    <div>
      {todos.map((e) => (
        <Task
          id={e.id}
          task={e.task}
          completed={e.completed}
          key={e.id}
          toggle={onToggle}
          deleteHandler={handleDelete}
        />
      ))}
    </div>
  );
};

export default ToDoList;
