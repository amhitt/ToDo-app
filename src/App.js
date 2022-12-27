import {Header} from './сomponents/Header/Header';
import styles from "./App.module.scss"
import {Footer} from './сomponents/Footer/Footer';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {ToDoList} from "./сomponents/TodoList/TodoList";
import { appMounted, appUnmounted } from './redux/localStorage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(appMounted())

    return () => {
      dispatch(appUnmounted())
    }
  })
  return (
    <div className={styles.App}>
      <Header/>
      <ToDoList/>
      <Footer/>
    </div>
  );
}

export default App;
