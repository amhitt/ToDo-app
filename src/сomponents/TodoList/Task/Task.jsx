import React from "react";
import styles from "./Task.module.scss";
import photo from "../../../assets/img/delete.png";

const Task = (props) => {
  
const id = props.id

const toggleTask = e => {
    props.toggle(id)
}

const deleteTask = e => {
    props.delete(id)
}

  return (
    <div className={styles.container}>
      <div className={styles.task}>
        <div className={styles.taskText}>
          <p>{props.task}</p>{" "}
        </div>
        <div className={styles.buttons}>
          <button className={styles.delete}>
            <img src={photo} alt="" onClick={e => deleteTask(e)} />
          </button>
          <input
            onChange={e => toggleTask(e)}
            type="checkbox"
            checked={props.completed}
            className={styles.check}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default Task;
