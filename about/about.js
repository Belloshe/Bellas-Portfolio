import Navbar from '../components/Navbar';

export default function About() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>About Me</h1>
        <Navbar />
      </header>
      <main className={styles.main}>
        <h2>Frontend Developer</h2>
        <p>I have a passion for creating beautiful and functional web applications.</p>
      </main>
    </div>
  );
}
