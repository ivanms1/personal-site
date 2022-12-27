import React from 'react';
import classNames from 'classnames';

import Github from '../../assets/icons/github.svg';
import Twitter from '../../assets/icons/twitter.svg';
import Linkedin from '../../assets/icons/linkedin.svg';

import { SectionProps } from '../../pages';

import styles from './MainSection.module.css';

interface MainSectionProps {
  currentSection: SectionProps['currentSection'];
  handleClick: (section: SectionProps['currentSection']) => void;
}

function MainSection({ currentSection, handleClick }: MainSectionProps) {
  return (
    <div
      className={classNames(styles.MainSection, {
        [styles.hideMobile]: currentSection !== 'about',
      })}
    >
      <div className={styles.ProfilePicture} />
      <div className={styles.Info}>
        <h1>Ivan Saldano</h1>
        <p>Fullstack Developer</p>
        <div className={styles.Socials}>
          <a
            href='https://twitter.com/ivanms1/'
            rel='noreferrer'
            target='_blank'
          >
            <Twitter />
          </a>
          <a href='https://github.com/ivanms1' rel='noreferrer' target='_blank'>
            <Github />
          </a>
          <a
            href='https://www.linkedin.com/in/ivansaldano/'
            rel='noreferrer'
            target='_blank'
          >
            <Linkedin />
          </a>
        </div>
        <div className={styles.ActionButtons}>
          <a href='assets/IVAN_CV.pdf' target='_blank'>
            Download CV
          </a>
          <p onClick={() => handleClick('contact')}>Contact Me</p>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
