import Link from 'next/link'
import Image from 'next/image';

import styles from './styles.module.css'

const Footer = () => {
    return (
      <footer className={`${styles.footer}`}>
        <nav>
          <ul className={`${styles.ul}`}>
            <h1>Joshua Day - Week 09 Assignment - Student Demo</h1>
            <a href="https://github.com/Zilzaer">GitHub</a>
            <a href="https://www.linkedin.com/in/joshua-day-ba1652311/">LinkedIn</a>
          </ul>
        </nav>
      </footer>
    );
  };
  
  export default Footer;