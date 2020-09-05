import { useState } from 'react';
import Head from 'next/head';

import SideBar from '../components/SideBar';

import styles from './index.module.css';
import MainSection from '../components/MainSection';
import SecondarySection from '../components/SecondaySection';

export interface SectionProps {
  currentSection: 'about' | 'resume' | 'portfolio' | 'contact';
}

const Home = () => {
  const [currentSection, setCurrentSection] = useState<
    SectionProps['currentSection']
  >('portfolio');

  const handleSideBarClick = (section: SectionProps['currentSection']) => {
    setCurrentSection(section);
  };
  return (
    <div className={styles.Container}>
      <Head>
        <title>Ivan Saldano</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <SideBar handleClick={handleSideBarClick} />
      <MainSection
        handleClick={handleSideBarClick}
        currentSection={currentSection}
      />
      <SecondarySection currentSection={currentSection} />
    </div>
  );
};

export default Home;
