import Navbar from '../components/Navbar';


export default function Projects() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>My Projects</h1>
        <Navbar />
      </header>
      <main className={styles.main}>
        <h2>Here are some of my projects</h2>
        <div className={styles.projectList}>
          <div className={styles.project}>
            <img src="/images/project1.png" alt="Project 1" className={styles.projectImage}/>
            <h3>Project 1</h3>
            <p>Description of the project.</p>
          </div>
          {/* Lägg till fler projekt här */}
        </div>
      </main>
    </div>
  );
}
