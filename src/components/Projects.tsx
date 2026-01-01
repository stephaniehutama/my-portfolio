import React from 'react';
import { ExternalLink, Github, Sparkles } from 'lucide-react';
import { useData } from '../context/DataContext';
import styles from './Projects.module.css';

const Projects: React.FC = () => {
  const { data } = useData();

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.header}>
        <span className={styles.tag}>
          <Sparkles size={14} />
          My Work
        </span>
        <h2 className={styles.title}>Featured Projects</h2>
        <p className={styles.subtitle}>
          A collection of things I've built with love and lots of matcha 🍵
        </p>
      </div>

      <div className={styles.grid}>
        {data.projects.map((project, index) => (
          <article 
            key={project.id} 
            className={`${styles.card} ${project.featured ? styles.featured : ''}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className={styles.imageWrapper}>
              {project.image ? (
                <img src={project.image} alt={project.title} className={styles.image} />
              ) : (
                <div className={styles.placeholder}>
                  <span>✨</span>
                </div>
              )}
              <div className={styles.overlay}>
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.iconBtn}>
                    <ExternalLink size={18} />
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.iconBtn}>
                    <Github size={18} />
                  </a>
                )}
              </div>
            </div>

            <div className={styles.content}>
              <div className={styles.categoryRow}>
                <span className={styles.category}>
                  {project.category === 'work' ? '💼 Work' : '🌸 Personal'}
                </span>
                {project.client && (
                  <span className={styles.clientBadge}>{project.client}</span>
                )}
              </div>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>
              <div className={styles.tags}>
                {project.tags.map(tag => (
                  <span key={tag} className={styles.tagPill}>{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
