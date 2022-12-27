import React from "react";
import {useDispatch, useSelector} from "react-redux";


import styles from "./Header.module.scss";
import {addToDO, completeAllTasks, taskChange} from "../../redux/todo-slice";

export const Header = () => {
    const dispatch = useDispatch();
    const task = useSelector((state) => state.newTaskText);
    const todos = useSelector((state) => state.todos);

    const onTaskChange = (payload) => {
        dispatch(taskChange(payload));
    };
    const addNewTask = () => {
        dispatch(addToDO());
    };

    const completeAllTodos = () => {
        dispatch(completeAllTasks())
    }

    return (
        <div className="">
            <h1>My ToDo List</h1>
            <div className={styles.newTask}>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Write your task here"
                    value={task}
                    onChange={(e) => onTaskChange(e.target.value)}
                />
                <button onClick={task !== "" ? addNewTask : null} className={styles.addButton}>
                    Add
                </button>
            </div>
            <button
                disabled={todos.length === 0}
                className={styles.allTask}
                onClick={completeAllTodos}
            >

                Complete all tasks
            </button>
        </div>
    );
}