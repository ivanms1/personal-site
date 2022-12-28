import React from 'react';
import { motion } from 'framer-motion';

import ContactImage from '@/assets/icons/contact.svg';

import { pageSpring } from '@/const/index';

import styles from './Contact.module.css';

const Contact = () => {
  return (
    <motion.div
      initial={{ x: -500 }}
      animate={{ x: 0 }}
      transition={pageSpring}
    >
      <h1 className={styles.Title}>Get in Touch</h1>
      <div className={styles.Socials}>
        <div className={styles.SocialCard}>
          <p className={styles.Social}>Email:</p>
          <p className={styles.SocialInfo}>contact@saldano.com</p>
        </div>
        <div className={styles.SocialCard}>
          <p className={styles.Social}>Twitter:</p>
          <a
            href='https://twitter.com/ivanms1'
            rel='noreferrer'
            target='_blank'
            className={styles.SocialInfo}
          >
            /ivanms1
          </a>
        </div>
        <div className={styles.SocialCard}>
          <p className={styles.Social}>Linkedin:</p>
          <a
            className={styles.SocialInfo}
            target='_blank'
            rel='noreferrer'
            href='https://www.linkedin.com/in/ivansaldano/'
          >
            /ivansaldano
          </a>
        </div>
        <div className={styles.SocialCard}>
          <p className={styles.Social}>Github:</p>
          <a
            href='https://github.com/ivanms1'
            target='_blank'
            rel='noreferrer'
            className={styles.SocialInfo}
          >
            /ivanms1
          </a>
        </div>
      </div>
      <div className={styles.ContactImageContainer}>
        <ContactImage />
      </div>
    </motion.div>
  );
};

export default Contact;
