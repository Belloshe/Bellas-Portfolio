
import styles from '../styles/mainContent.module.css';

export default function MainContent() {
  return (
    <div className={styles.mainContent}>
      <section id="about" className={styles.aboutSection}>
        <div className={styles.aboutContainer}>
          <h2 className={styles.aboutTitle}>About Me</h2>
          <p className={styles.aboutText}>
          I'm a 25-year-old woman who loves building websites and web apps that are simple to use and look good.
          </p>
          <p className={styles.aboutText}>
          I work with HTML, CSS, JavaScript, and React to create user-friendly designs. I enjoy learning new things, trying out new ideas, and improving my skills. I'm also great at working in a team, and I enjoy collaborating with others to reach common goals. In my free time, I explore new technologies and take on challenges that help me grow and think in new ways.
          </p>
        </div>
        <div className={styles.skillsContainer}>
          <h3 className={styles.skillsTitle}>My Skills</h3>
          <div className={styles.skillsGrid}>
            <div className={styles.skillCard}>
              <div className={styles.skillIcon}>
                <img src="/icons/html5.svg" alt="HTML5" />
              </div>
              <h4>HTML & CSS</h4>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: '90%' }}></div>
              </div>
            </div>
            <div className={styles.skillCard}>
              <div className={styles.skillIcon}>
                <img src="/icons/javascript.svg" alt="JavaScript" />
              </div>
              <h4>JavaScript</h4>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: '85%' }}></div>
              </div>
            </div>
            <div className={styles.skillCard}>
              <div className={styles.skillIcon}>
                <img src="/icons/react.svg" alt="React" />
              </div>
              <h4>React & Next.js</h4>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: '80%' }}></div>
              </div>
            </div>
            <div className={styles.skillCard}>
              <div className={styles.skillIcon}>
                <img src="/icons/responsive.svg" alt="Responsive Design" />
              </div>
              <h4>Responsive Design</h4>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: '95%' }}></div>
              </div>
            </div>
            <div className={styles.skillCard}>
              <div className={styles.skillIcon}>
                <img src="/icons/git.svg" alt="Version Control" />
              </div>
              <h4>Version Control (Git)</h4>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className={styles.projectSection}>
      <h2 className={styles.aboutTitle}>My Projects</h2>
  <div className={styles.projectContainer}>
    
    <div className={styles.projectCard}>
      <img src="/images/Game.png" alt="Project 1" />
      <h3 className={styles.projectTitle}></h3>
      <p className={styles.projectDescription}>
      This game is inspired by another well-known game where you guide a bird through gaps between pipes. It was a fun project that I worked on
      </p>
      <div className={styles.projectLinks}>
  <a href="https://github.com/Belloshe/Game" className={`${styles.projectLink} ${styles.github}`}>
    View on GitHub
  </a>
  <a href="https://game-two-red.vercel.app/" className={styles.projectLink}>
    View on Vercel
  </a>
</div>
    </div>

    <div className={styles.projectCard}>
      <img src="/images/jolintdashboard.png" alt="Project 2" />
      <h3 className={styles.projectTitle}></h3>
      <p className={styles.projectDescription}>
      The Jolint Dashboard is a tool designed to track and visualize inclusion metrics, It was a fun project I got to do in school!
      </p>
      <div className={styles.projectLinks}>
  <a href="https://github.com/Belloshe/jolinDashboard" className={`${styles.projectLink} ${styles.github}`}>
    View on GitHub
  </a>
  <a href="https://jolin-dashboard.vercel.app/" className={styles.projectLink}>
    View on Vercel
  </a>
</div>
    </div>


    <div className={styles.projectCard}>
      <img src="/images/shop.png" alt="Project 3" />
      <h3 className={styles.projectTitle}></h3>
      <p className={styles.projectDescription}>
      This was my final thesis project, where I focused on creating a user-friendly shopping experience with an intuitive design.
      </p>
      <div className={styles.projectLinks}>
  <a href="https://github.com/Belloshe/shop" className={`${styles.projectLink} ${styles.github}`}>
    View on GitHub
  </a>
  <a href="https://shop-omega-six.vercel.app/" className={styles.projectLink}>
    View on Vercel
  </a>
</div>
    </div>
  </div>
</section>

    </div>
  );
}
