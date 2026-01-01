import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import styles from './ThemeToggle.module.css';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      onClick={toggleTheme} 
      className={styles.toggle}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className={styles.iconWrapper}>
        <Sun className={`${styles.icon} ${styles.sun} ${theme === 'light' ? styles.active : ''}`} size={18} />
        <Moon className={`${styles.icon} ${styles.moon} ${theme === 'dark' ? styles.active : ''}`} size={18} />
      </div>
    </button>
  );
};

export default ThemeToggle;
