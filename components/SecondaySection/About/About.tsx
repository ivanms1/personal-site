import React from 'react';
import { motion } from 'framer-motion';

import { pageSpring } from '@/const/index';

import GlobeIcon from '@/assets/icons/globe.svg';
import MicIcon from '@/assets/icons/mic.svg';
import PlaneIcon from '@/assets/icons/plane.svg';
import GuitarIcon from '@/assets/icons/guitar.svg';

import styles from './About.module.css';

const About = () => {
  return (
    <motion.div
      initial={{ x: -500 }}
      animate={{ x: 0 }}
      transition={pageSpring}
    >
      <h1 className={styles.FirstTitle}>About Me</h1>
      <div className={styles.Row}>
        <div className={styles.Intro}>
          <h3>Hello I am Ivan Saldano</h3>
          <span>
            Born in Argentina, raised in Chile and now living in South Korea.
            Always learning and passionate about web development.
          </span>
        </div>
        <div className={styles.PersonalInfo}>
          <div className={styles.InfoRow}>
            <span>Country:</span>
            <span>Argentina/Chile</span>
          </div>
          <div className={styles.InfoRow}>
            <span>Living:</span>
            <span>Korea</span>
          </div>
          <div className={styles.InfoRow}>
            <span>Languages:</span>
            <span>English, Spanish</span>
          </div>
          <div className={styles.InfoRow}>
            <span>Hobbies:</span>
            <span>Football, Coding</span>
          </div>
        </div>
      </div>
      <h1 className={styles.Title}>Fun Facts</h1>
      <div className={styles.FunFacts}>
        <div className={styles.FunFact}>
          <GlobeIcon />
          <p>
            16 Countries <br /> Visited
          </p>
        </div>
        <div className={styles.FunFact}>
          <MicIcon />
          <p>
            232 Dad Jokes <br /> Told
          </p>
        </div>
        <div className={styles.FunFact}>
          <GuitarIcon />
          <p>
            4328 Songs <br /> Played
          </p>
        </div>
        <div className={styles.FunFact}>
          <PlaneIcon />
          <p>
            51 Flights <br /> Taken
          </p>
        </div>
      </div>
      <h1 className={styles.Title}>More About Me</h1>
      <div className={styles.Row}>
        <p className={styles.MoreAboutMe}>
          I am a highly motivated and committed professional with a proven
          record of generating and building relationships and hard work. A team
          player but I also have the ability to work independently. I am skilled
          and adaptable, able to overcome pressure and deliver quality work.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
