export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: 'work' | 'personal';
  featured: boolean;
  client?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface Skill {
  id: string;
  name: string;
  icon: string;
  category: string;
}

export interface PortfolioData {
  projects: Project[];
  experiences: Experience[];
  skills: Skill[];
  about: {
    name: string;
    title: string;
    bio: string;
    email: string;
    github: string;
    linkedin: string;
  };
}
