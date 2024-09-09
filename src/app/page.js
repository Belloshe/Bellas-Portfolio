
import Header from './components/header';
import MainContent from './components/maincontent';
import styles from './styles/page.module.css';
import Navbar from './components/navbar';

export default function Home() {
  return (
    <div className={styles.container}>
        <Navbar />
      <Header />
      <MainContent />
    </div>
  );
}
