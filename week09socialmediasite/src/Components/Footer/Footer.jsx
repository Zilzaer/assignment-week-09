import Link from 'next/link';
import Image from 'next/image';
import * as Accordion from '@radix-ui/react-accordion';
import styles from './styles.module.css';

const Footer = () => {
  return (
    <footer className={`${styles.footer}`}>
      
      <Accordion.Root className={`${styles.accordion}`} type="single" collapsible>
        <Accordion.Item className={`${styles.accordionItem}`} value="item-1">
          <Accordion.Header className={`${styles.accordionHeader}`}>
            <Accordion.Trigger className={`${styles.accordionTrigger}`}>
              Info & Socials
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className={`${styles.accordionContent}`}>
          <nav>
        <ul className={`${styles.ul}`}>
          <h1>Joshua Day - Week 09 Assignment - Student Demo</h1>
          <a href="https://github.com/Zilzaer">GitHub</a>
          <a href="https://www.linkedin.com/in/joshua-day-ba1652311/">LinkedIn</a>
        </ul>
      </nav>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </footer>
  );
};

export default Footer;
