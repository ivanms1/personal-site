import React from 'react';
import { motion } from 'framer-motion';

import { spring } from '../../helpers/animations';

import styles from './Portfolio.module.css';

const projectsLeft = [
  'https://source.unsplash.com/random/400x650',
  'https://source.unsplash.com/random/500x500',
  'https://source.unsplash.com/random/600x400',
  'https://source.unsplash.com/random/450x600',
];

const projectsRight = [
  'https://source.unsplash.com/random/400x420',
  'https://source.unsplash.com/random/400x450',
  'https://source.unsplash.com/random/400x550',
  'https://source.unsplash.com/random/400x500',
];

const Portfolio = () => {
  return (
    <motion.div initial={{ x: -500 }} animate={{ x: 0 }} transition={spring}>
      <h1 className={styles.Title}>Blog</h1>
      <div className={styles.MainContainer}>
        <div className={styles.Left}>
          {projectsLeft.map((project) => (
            <div key={project} className={styles.Project}>
              <div className={styles.ImageContainer}>
                <img src={project} alt='random' />
              </div>
              <p>Some Name</p>
            </div>
          ))}
        </div>
        <div className={styles.Right}>
          {projectsRight.map((project) => (
            <div key={project} className={styles.Project}>
              <div className={styles.ImageContainer}>
                <img src={project} alt='random' />
              </div>
              <p>Some Name</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
