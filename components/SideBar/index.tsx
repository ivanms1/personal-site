import React from 'react';

import { SectionProps } from '../../pages/index';

import AboutIcon from '../../assets/icons/social.svg';
import ResumeIcon from '../../assets/icons/business.svg';
import PortfolioIcon from '../../assets/icons/file.svg';
import ContactIcon from '../../assets/icons/signs.svg';

import styles from './SideBar.module.css';

interface SideBarProps {
  handleClick: (section: SectionProps['currentSection']) => void;
}

const SideBar = ({ handleClick }: SideBarProps) => {
  return (
    <div className={styles.SideBar}>
      <div className={styles.Item} onClick={() => handleClick('about')}>
        <AboutIcon />
        <span>About</span>
      </div>
      <div className={styles.Item} onClick={() => handleClick('resume')}>
        <ResumeIcon />
        <span>Resume</span>
      </div>
      <div className={styles.Item} onClick={() => handleClick('portfolio')}>
        <PortfolioIcon />
        <span>Portfolio</span>
      </div>
      <div className={styles.Item} onClick={() => handleClick('contact')}>
        <ContactIcon />
        <span>Contact</span>
      </div>
    </div>
  );
};

export default SideBar;
