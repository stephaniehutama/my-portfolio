import React from "react"
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react"
import { useData } from "../context/DataContext"
import styles from "./Hero.module.css"

const Hero: React.FC = () => {
  const { data } = useData()
  const { about } = data

  return (
    <section className={styles.hero}>
      {/* Decorative blobs */}
      <div className={styles.blob1} />
      <div className={styles.blob2} />
      <div className={styles.blob3} />

      <div className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.dot} />
          Available for opportunities
        </div>

        <h1 className={styles.title}>
          Hi, I'm <span className={styles.name}>{about.name}</span>
          <span className={styles.wave}>👋</span>
        </h1>

        <p className={styles.subtitle}>{about.title}</p>

        <p className={styles.bio}>{about.bio}</p>

        <div className={styles.actions}>
          <a href="#projects" className={styles.btnPrimary}>
            View My Work
            <ArrowDown size={18} />
          </a>
          <a
            href="/files/stephanie-clarissa-hutama.pdf"
            download="Stephanie_Clarissa_Hutama.pdf"
            className={styles.btnSecondary}
          >
            <Download size={18} />
            Download CV
          </a>
        </div>

        <div className={styles.socials}>
          <a
            href={`https://github.com/${about.github}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href={`https://linkedin.com/in/${about.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a href={`mailto:${about.email}`} aria-label="Email">
            <Mail size={20} />
          </a>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <span>Scroll to explore</span>
        <ArrowDown size={16} />
      </div>
    </section>
  )
}

export default Hero
