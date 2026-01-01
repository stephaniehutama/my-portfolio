import React from 'react';
import { Mail, Github, Linkedin, Heart } from 'lucide-react';
import { useData } from '../context/DataContext';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
  const { data } = useData();
  const { about } = data;

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.card}>
        <div className={styles.content}>
          <span className={styles.tag}>
            <Heart size={14} />
            Let's Connect
          </span>
          <h2 className={styles.title}>Say Hello!</h2>
          <p className={styles.description}>
            I'm always excited to meet new people, discuss ideas, or collaborate on projects. 
            Feel free to reach out! 💌
          </p>

          <div className={styles.links}>
            <a href={`mailto:${about.email}`} className={styles.link}>
              <Mail size={20} />
              <span>{about.email}</span>
            </a>
            <a href={`https://github.com/${about.github}`} target="_blank" rel="noopener noreferrer" className={styles.link}>
              <Github size={20} />
              <span>github.com/{about.github}</span>
            </a>
            <a href={`https://linkedin.com/in/${about.linkedin}`} target="_blank" rel="noopener noreferrer" className={styles.link}>
              <Linkedin size={20} />
              <span>linkedin.com/in/{about.linkedin}</span>
            </a>
          </div>
        </div>

        <div className={styles.decoration}>
          <div className={styles.flower}>🌸</div>
          <div className={styles.flower}>✨</div>
          <div className={styles.flower}>🦋</div>
        </div>
      </div>

      <footer className={styles.footer}>
        <p>
          Designed & Built with <Heart size={14} className={styles.heart} /> by {about.name}
        </p>
        <p className={styles.year}>© {new Date().getFullYear()}</p>
      </footer>
    </section>
  );
};

export default Contact;
