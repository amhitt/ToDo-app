import React, { useState } from "react";

import styles from  "./Header.module.scss";

const TodoList = (props) => {
  const [todoText, setTodoText] = useState('');
  


    // const addNewTask = (e) => {
    //     e.preventDefault;

    // }
    // const CompleteAllTask = (e) => {
    //     e.preventDefault;

    // }

  return (
    <div className="">
      <h1>My ToDo List</h1>
      <div className={styles.newTask}>
        <input
          className={styles.input}
          type="text"
          placeholder="Write your task here"
          value={todoText}
          onChange={e => setTodoText(e.target.value)}
          
        />
        <button className={styles.addButton}>Add</button>
        
      </div>
      <button className={styles.allTask}>Complete all task</button>
    </div>
  );
};

export default TodoList;
