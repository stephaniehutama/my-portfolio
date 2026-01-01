import React from 'react';
import { Briefcase } from 'lucide-react';
import { useData } from '../context/DataContext';
import styles from './Experience.module.css';

const Experience: React.FC = () => {
  const { data } = useData();

  return (
    <section id="experience" className={styles.section}>
      <div className={styles.header}>
        <span className={styles.tag}>
          <Briefcase size={14} />
          Experience
        </span>
        <h2 className={styles.title}>Where I've Worked</h2>
      </div>

      <div className={styles.timeline}>
        {data.experiences.map((exp, index) => (
          <div key={exp.id} className={styles.item} style={{ animationDelay: `${index * 0.2}s` }}>
            <div className={styles.dot} />
            <div className={styles.card}>
              <span className={styles.period}>{exp.period}</span>
              <h3 className={styles.role}>{exp.role}</h3>
              <p className={styles.company}>{exp.company}</p>
              <p className={styles.description}>{exp.description}</p>
              <div className={styles.highlights}>
                {exp.highlights.map(h => (
                  <span key={h} className={styles.highlight}>{h}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
