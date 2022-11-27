import Header from './сomponents/Header/Header';
import styles from "./App.module.scss"
import Footer from './сomponents/Footer/Footer';
import ToDoList from './сomponents/ToDoList/ToDoList';

function App() {
  return (
    <div className={styles.App}>
      <Header/>
      <ToDoList/>
      <Footer/>
    </div>
  );
}

export default App;
