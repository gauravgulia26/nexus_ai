export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  type: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  metrics?: { label: string; value: string }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location?: string;
  details?: string[];
}

export interface ProjectLink {
  label: string;
  url: string;
  type: 'github' | 'demo' | 'docker' | 'api' | 'docs' | 'pypi';
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'genai' | 'mlops' | 'cv' | 'library';
  period: string;
  problem: string;
  approach: string;
  architecture: string;
  contributions: string[];
  technologies: string[];
  outcomes: string[];
  status: string;
  links?: ProjectLink[];
  metrics?: { label: string; value: string }[];
}

export interface ResearchPublication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  period: string;
  abstract: string;
  methodology: string[];
  metrics: { label: string; value: string }[];
  technologies: string[];
  highlights: string[];
}

export interface SkillCategory {
  name: string;
  code: string;
  description: string;
  skills: {
    name: string;
    level: number; // 0-100 (relative self-assessed proficiency)
    highlight?: boolean;
  }[];
}

export interface TerminalCommand {
  command: string;
  description: string;
  output?: string | string[];
}
