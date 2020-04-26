import React from 'react';

import styles from './MainSection.module.css';

function MainSection() {
  return (
    <div className={styles.MainSection}>
      <div className={styles.ProfilePicture} />
      <div className={styles.Info}>
        <h1>Ivan Saldano</h1>
        <p>Software Engineer</p>
        <div className={styles.Socials}>
          <span>twitter</span>
          <span>github</span>
        </div>
        <div className={styles.ActionButtons}>
          <button>Download CV</button>
          <button>Contact Me</button>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
