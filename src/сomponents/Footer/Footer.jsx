import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAllTasks } from "../../redux/todoList-reducer";
import styles from "./Footer.module.scss";

const Footer = () => {
  const dispatch = useDispatch();
  
  const todos = useSelector((state) => state.todos);

  const onDeleteAll = () => {
    dispatch(deleteAllTasks());
  };

  return (
    <div className={styles.footer}>
      <button
        disabled={todos.length === 0}
        onClick={onDeleteAll}
        className={styles.delteAll}
      >
        Delete all tasks
      </button>
      <div className={styles.text}>Всего задач: {todos.length}</div>
      
    </div>
  );
};

export default Footer;
