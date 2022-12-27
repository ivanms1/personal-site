import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import Testimonials from './Testimonials';

import Javascript from '../../assets/icons/javascript.svg';
import ReactIcon from '../../assets/icons/react-icon.svg';
import Nodejs from '../../assets/icons/nodejs.svg';
import Typescript from '../../assets/icons/typescript.svg';
import graphql from '../../assets/icons/graphql.png';
import MongoDB from '../../assets/icons/mongodb.svg';
import Sass from '../../assets/icons/sass.svg';
import Cypress from '../../assets/icons/cypress.svg';
import Checkmark from '../../assets/icons/checkmark.svg';

import { spring } from '../../helpers/animations';

import styles from './Resume.module.css';

const knowledgeItems = [
  'Git Workflow',
  'Unit Testing',
  'Animations',
  'Responsive Design',
  'Databases',
  'Internationalization',
  'Translation',
  'Docker',
];

const Resume = () => {
  return (
    <motion.div
      initial={{ x: -500, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={spring}
    >
      <h1 className={styles.Title}>Resume</h1>
      <div className={styles.Experiences}>
        <div className={styles.Experience}>
          <h4 className={styles.JobTitle}>Fullstack Developer</h4>
          <p className={styles.WorkPlace}>AcceleratorApp.co</p>
          <p className={styles.JobTime}>Jan 2019 - Oct 2020</p>
          <p className={styles.Summary}>
            Maintained and enhanced a SaSS platform used by the most prestigious
            incubators and accelerators in the world.
          </p>
        </div>
        <div className={styles.Experience}>
          <h4 className={styles.JobTitle}>Frontend Developer</h4>
          <p className={styles.WorkPlace}>Hackerbay.io</p>
          <p className={styles.JobTime}>Sept 2018 - Jan 2019</p>
          <p className={styles.Summary}>
            Created fullstack tutorials and guiddes, helped students in the
            company&lsquo;s educational program.
          </p>
        </div>
        <div className={styles.Experience}>
          <h4 className={styles.JobTitle}>Linguist Researcher</h4>
          <p className={styles.WorkPlace}>University of the Nations</p>
          <p className={styles.JobTime}>Sept 2015 - Sept 2018</p>
          <p className={styles.Summary}>
            Conducted various linguistic researchs in Nepal and Thailand.
          </p>
        </div>
      </div>
      <h1 className={styles.Title}>My Skills</h1>
      <div className={styles.SkillBox}>
        <div className={styles.Stack}>
          <h3>Stack</h3>
          <div className={styles.Techs}>
            <Javascript />
            <ReactIcon />
            <Nodejs />
            <Typescript />
            <Image className={styles.TechIcon} src={graphql} alt='graphql' />
            <MongoDB />
            <Sass />
            <Cypress />
          </div>
          <p>and more...</p>
        </div>
        <div className={styles.Knowledge}>
          <h3>Knowledge</h3>
          <div className={styles.KnowledgeList}>
            {knowledgeItems.map((item) => (
              <div key={item} className={styles.KnowledgeItem}>
                <Checkmark />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <h1 className={styles.Title}>Testimonials</h1>
      <Testimonials />
    </motion.div>
  );
};

export default Resume;
