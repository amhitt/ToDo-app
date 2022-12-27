import React from "react";
import {useDispatch, useSelector} from "react-redux";

import styles from "./Footer.module.scss";
import {deleteAllTasks} from "../../redux/todo-slice";

export const Footer = () => {
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
                className={styles.deleteAll}
            >
                Delete all tasks
            </button>
            <div className={styles.text}>Всего задач: {todos.length}</div>

        </div>
    );
};

