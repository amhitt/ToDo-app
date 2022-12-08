import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAllTasks } from "../../redux/todoList-reducer";
import styles from "./Footer.module.scss";
const Footer = () => {
  const dispatch = useDispatch();
  const onDeleteAll = () => {
    dispatch(deleteAllTasks());
  };
  const todos = useSelector((state) => state.todos);
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
      <div>Невыполненных задач: {3  }</div>
    </div>
  );
};

export default Footer;
