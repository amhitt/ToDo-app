import React from "react";
import styles from "./Task.module.scss";
import photo from "../../assets/img/delete.png";

const Task = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.task}>
                <div className={styles.taskText}><p>{props.task}</p>  </div>
                <div className={styles.buttons}>
                    <button className={styles.delete}><img src={photo} alt="" /></button>
                    <input type='checkbox' className={styles.check}></input>
                </div>
               
            </div> 
           
        </div>
    )
}

export default Task 