import React from 'react';

import javascript from '../../assets/icons/javascript.svg';
import reactIcon from '../../assets/icons/react-icon.svg';
import nodejs from '../../assets/icons/nodejs.svg';
import typescript from '../../assets/icons/typescript.svg';
import graphql from '../../assets/icons/graphql.png';
import mongodb from '../../assets/icons/mongodb.svg';
import sass from '../../assets/icons/sass.svg';
import cypress from '../../assets/icons/cypress.svg';
import checkmark from '../../assets/icons/checkmark.svg';

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
    <div>
      <h1 className={styles.Title}>Resume</h1>
      <div className={styles.Experiences}>
        <div className={styles.Experience}>
          <p className={styles.JobTime}>Jan 2019 - Present</p>
          <h4 className={styles.JobTitle}>Software Engineer</h4>
          <p className={styles.WorkPlace}>AcceleratorApp.co</p>
          <p className={styles.Summary}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Accusantium minus labore neque quidem sapiente in eligendi impedit
            perspiciatis quae excepturi.
          </p>
        </div>
        <div className={styles.Experience}>
          <p className={styles.JobTime}>Sept 2018 - Jan 2019</p>
          <h4 className={styles.JobTitle}>Software Engineer</h4>
          <p className={styles.WorkPlace}>Hackerbay.io</p>
          <p className={styles.Summary}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Accusantium minus labore neque quidem sapiente in eligendi impedit
            perspiciatis quae excepturi.
          </p>
        </div>
        <div className={styles.Experience}>
          <p className={styles.JobTime}>Sept 2015 - Sept 2018</p>
          <h4 className={styles.JobTitle}>Linguist Researcher</h4>
          <p className={styles.WorkPlace}>University of the Nations</p>
          <p className={styles.Summary}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Accusantium minus labore neque quidem sapiente in eligendi impedit
            perspiciatis quae excepturi.
          </p>
        </div>
      </div>
      <h1 className={styles.Title}>My Skills</h1>
      <div className={styles.SkillBox}>
        <div className={styles.Stack}>
          <h3>Stack</h3>
          <div className={styles.Techs}>
            <img
              className={styles.TechIcon}
              src={javascript}
              alt='javascript'
            />
            <img className={styles.TechIcon} src={reactIcon} alt='react' />
            <img className={styles.TechIcon} src={nodejs} alt='node js' />
            <img
              className={styles.TechIcon}
              src={typescript}
              alt='typescript'
            />
            <img className={styles.TechIcon} src={graphql} alt='graphql' />
            <img className={styles.TechIcon} src={mongodb} alt='mongodb' />
            <img className={styles.TechIcon} src={sass} alt='sass' />
            <img className={styles.TechIcon} src={cypress} alt='cypress' />
          </div>
          <p>and more...</p>
        </div>
        <div className={styles.Knowledge}>
          <h3>Knowledge</h3>
          <div className={styles.KnowledgeList}>
            {knowledgeItems.map((item) => (
              <div key='item' className={styles.KnowledgeItem}>
                <img
                  className={styles.Checkmark}
                  src={checkmark}
                  alt='checkmark'
                />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
