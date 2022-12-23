import React from "react";
import styles from "./Task.module.scss";
import photo from "../../../assets/img/delete.png";

const Task = ({
  toggle,
  task,
  id,
  deleteHandler,
  completed
}) => {

const toggleTask = e => {
  toggle(id)
}

const deleteTask = e => {
  deleteHandler(id)
}

  return (
    <div className={styles.container}>
      <div className={styles.task}>
        <div className={styles.taskText}>
          <p>{task}</p>{" "}
        </div>
        <div className={styles.buttons}>
          <button className={styles.delete}>
            <img src={photo} alt="" onClick={e => deleteTask(e)} />
          </button>
          <input
            onChange={e => toggleTask(e)}
            type="checkbox"
            checked={completed}
            className={styles.input}
          ></input>
          
        </div>
      </div>
    </div>
  );
};

export default Task;
