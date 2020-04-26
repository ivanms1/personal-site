import React from 'react';

import About from './About';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Contact from './Contact';

import { SectionProps } from '../../pages';

import styles from './SecondarySection.module.css';

const sections = {
  about: About,
  resume: Resume,
  portfolio: Portfolio,
  contact: Contact,
};

const SecondarySection = ({ currentSection }: SectionProps) => {
  const Section = sections[currentSection];
  return (
    <div className={styles.SecondarySection}>
      <Section />
    </div>
  );
};

export default SecondarySection;
