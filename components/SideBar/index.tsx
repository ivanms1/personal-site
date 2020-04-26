import React from 'react';

import { SectionProps } from '../../pages/index';

import styles from './SideBar.module.css';

interface SideBarProps {
  handleClick: (section: SectionProps['currentSection']) => void;
}

const SideBar = ({ handleClick }: SideBarProps) => {
  return (
    <div className={styles.SideBar}>
      <div className={styles.Item} onClick={() => handleClick('about')}>
        <span>About</span>
      </div>
      <div className={styles.Item} onClick={() => handleClick('resume')}>
        <span>Resume</span>
      </div>
      <div className={styles.Item} onClick={() => handleClick('portfolio')}>
        <span>Portfolio</span>
      </div>
      <div className={styles.Item} onClick={() => handleClick('contact')}>
        <span>Contact</span>
      </div>
    </div>
  );
};

export default SideBar;
