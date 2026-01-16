import React from "react"
import { Code2, Languages, Sparkles } from "lucide-react"
import {
  SiVuedotjs,
  SiReact,
  SiNuxtdotjs,
  SiHtml5,
  SiBootstrap,
  SiTypescript,
  SiJavascript,
  SiGraphql,
  SiGooglemaps,
  SiChartdotjs,
  SiGit,
  SiDocker,
  SiPinia,
} from "react-icons/si"
import { TbRoute, TbBrandSocketIo, TbDatabase } from "react-icons/tb"
import { useData } from "../context/DataContext"
import styles from "./Skills.module.css"

// Icon mapping
const iconMap: Record<string, React.ReactNode> = {
  "Vue.js": <SiVuedotjs />,
  React: <SiReact />,
  Nuxt: <SiNuxtdotjs />,
  "HTML/CSS": <SiHtml5 />,
  Bootstrap: <SiBootstrap />,
  TypeScript: <SiTypescript />,
  JavaScript: <SiJavascript />,
  Vuex: <SiVuedotjs />,
  "Vue Router": <TbRoute />,
  GraphQL: <SiGraphql />,
  WebSocket: <TbBrandSocketIo />,
  "Google Maps": <SiGooglemaps />,
  "Chart.js": <SiChartdotjs />,
  Git: <SiGit />,
  Docker: <SiDocker />,
  Pinia: <TbDatabase />,
}

const Skills: React.FC = () => {
  const { data } = useData()

  if (!data?.skills) {
    return null
  }

  const groupedSkills = data.skills.technical.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push(skill)
    return acc
  }, {} as Record<string, typeof data.skills.technical>)

  const categoryOrder = [
    "Frontend",
    "Language",
    "State Management",
    "Backend & Integration",
    "Tools",
  ]

  return (
    <section id="skills" className={styles.section}>
      <div className={styles.flower}>🌸</div>
      <div className={styles.flower}>✨</div>
      <div className={styles.flower}>💫</div>

      <div className={styles.header}>
        <span className={styles.tag}>
          <Sparkles size={14} />
          What I Do
        </span>
        <h2 className={styles.title}>Skills & Languages</h2>
        <p className={styles.subtitle}>
          Technologies I love working with and languages I speak ✨
        </p>
      </div>

      <div className={styles.skillsSection}>
        <h3 className={styles.sectionTitle}>
          <Code2 size={20} />
          Technical Skills
        </h3>

        <div className={styles.categoriesWrapper}>
          {categoryOrder.map((category) => {
            const skills = groupedSkills[category]
            if (!skills) return null

            return (
              <div key={category} className={styles.categoryGroup}>
                <h4 className={styles.categoryTitle}>{category}</h4>
                <div className={styles.grid}>
                  {skills.map((skill, index) => (
                    <div
                      key={skill.name}
                      className={styles.skillCard}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className={styles.iconWrapper}>
                        <span className={styles.icon}>
                          {iconMap[skill.name] || skill.name.charAt(0)}
                        </span>
                      </div>
                      <h4 className={styles.skillName}>{skill.name}</h4>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className={styles.skillsSection}>
        <h3 className={styles.sectionTitle}>
          <Languages size={20} />
          Languages
        </h3>
        <div className={styles.languagesList}>
          {data.skills.languages.map((lang, index) => (
            <div
              key={lang.name}
              className={styles.languageCard}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={styles.langHeader}>
                <span className={styles.flag}>{lang.flag}</span>
                <div>
                  <h4 className={styles.langName}>{lang.name}</h4>
                  <span className={styles.level}>{lang.level}</span>
                </div>
              </div>
              <div className={styles.progressBar}>
                <div
                  className={styles.progress}
                  style={{ width: `${lang.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
