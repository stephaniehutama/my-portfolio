export interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  liveUrl?: string
  githubUrl?: string
  category: "work" | "personal"
  featured: boolean
  client?: string
}

export interface Experience {
  id: string
  role: string
  company: string
  period: string
  description: string
  highlights: string[]
}

export interface Skill {
  name: string
  category: string
}

export interface Language {
  name: string
  level: string
  flag: string
  percentage: number
}

export interface About {
  name: string
  title: string
  bio: string
  email: string
  github: string
  linkedin: string
}

export interface Skills {
  technical: Skill[]
  languages: Language[]
}

export interface PortfolioData {
  about: About
  projects: Project[]
  experiences: Experience[]
  skills: Skills
}
