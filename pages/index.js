import Home from './components/Home';
import NavBar from './components/NavBar';
import styles from '../styles/MainPage.module.css';

const MainPage = () => {
  return (
    <div>
      <NavBar />
      <div className={styles.layout}>
        <Home />
      </div>
    </div>
  );
};

export default MainPage;
