import { useDispatch, useSelector } from "react-redux";
import {Task} from "./Task/Task";
import {deleteToDo, toggleToDo} from "../../redux/todo-slice";



export const ToDoList = () => {
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const handleDelete = (payload) =>
      dispatch(deleteToDo(payload));

  const onToggle = (payload) => dispatch(toggleToDo(payload));

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

