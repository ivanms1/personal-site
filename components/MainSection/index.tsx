import React from 'react';

import Github from '../../assets/icons/github.svg';
import Twitter from '../../assets/icons/twitter.svg';

import styles from './MainSection.module.css';

function MainSection() {
  return (
    <div className={styles.MainSection}>
      <div className={styles.ProfilePicture} />
      <div className={styles.Info}>
        <h1>Ivan Saldano</h1>
        <p>Software Engineer</p>
        <div className={styles.Socials}>
          <a href='https://twitter.com/ivanms1/' target='_blank'>
            <Twitter />
          </a>
          <a href='https://github.com/ivanms1' target='_blank'>
            <Github />
          </a>
        </div>
        <div className={styles.ActionButtons}>
          <p>Download CV</p>
          <p>Contact Me</p>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
