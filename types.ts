export interface Project {
  title: string;
  period: string;
  tools: string[];
  description: string[];
  link?: string;
  image?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  score: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
}

export interface Achievement {
  title: string;
  date: string;
}

export interface CodingProfile {
  platform: string;
  stats: string;
  extra?: string;
  icon?: any;
  link?: string;
}