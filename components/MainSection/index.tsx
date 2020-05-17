import React from 'react';
import classNames from 'classnames';

import Github from '../../assets/icons/github.svg';
import Twitter from '../../assets/icons/twitter.svg';
import Linkedin from '../../assets/icons/linkedin.svg';

import { SectionProps } from '../../pages';

import styles from './MainSection.module.css';

interface MainSectionProps {
  currentSection: SectionProps['currentSection'];
}

function MainSection({ currentSection }: MainSectionProps) {
  return (
    <div
      className={classNames(styles.MainSection, {
        [styles.hideMobile]: currentSection !== 'about',
      })}
    >
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
          <a href='https://www.linkedin.com/in/ivansaldano/' target='_blank'>
            <Linkedin />
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
