import React from 'react';
import { motion } from 'framer-motion';

import { spring } from '../../helpers/animations';

import GlobeIcon from '../../assets/icons/globe.svg';
import MicIcon from '../../assets/icons/mic.svg';
import PlaneIcon from '../../assets/icons/plane.svg';
import GuitarIcon from '../../assets/icons/guitar.svg';

import styles from './About.module.css';

const About = () => {
  return (
    <motion.div initial={{ x: -500 }} animate={{ x: 0 }} transition={spring}>
      <h1 className={styles.Title}>About Me</h1>
      <div className={styles.Row}>
        <div className={styles.Intro}>
          <h3>Hello I am Ivan Saldano</h3>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore hic
            ab explicabo quis blanditiis neque dolor laborum fugit aliquam
            repudiandae!
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus cum qui
          error tempore hic, fuga eos fugit itaque quae, labore porro fugiat
          architecto asperiores doloremque incidunt aperiam modi aliquid ea
          eaque quia sunt ad accusamus est non. Consequatur, facilis non.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
