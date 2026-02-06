import { Project, Experience, Education, Certification, Achievement, CodingProfile } from './types';
import { Linkedin, Github, Terminal, Database, Code } from 'lucide-react';

export const SOCIAL_LINKS = {
  github: "https://github.com/Vishwas-Chakilam",
  linkedin: "https://www.linkedin.com/in/vishwas-chakilam",
  x: "https://x.com/Vishwas_072",
  email: "work.vishwas1@gmail.com",
  phone: "+91-8019719747",
  location: "Hyderabad"
};

export const BIO = {
  name: "Vishwas Chakilam",
  tagline: "Software Engineer | Data Analyst | Computer Science Engineering Student",
  description: "Passionate about Leveraging Data to Drive Insights and Innovation. I specialize in building scalable web applications and intelligent machine learning models."
};

export const EDUCATION: Education[] = [
  {
    institution: "Institute of Aeronautical Engineering, Hyderabad",
    degree: "B.Tech in Computer Science Engineering (Data Science)",
    period: "Expected - May 2026",
    score: "GPA: 8.48*/10"
  },
  {
    institution: "Sri Chaitanya Junior College, Hyderabad",
    degree: "Class 12th",
    period: "2022",
    score: "Percentage: 95.6%"
  },
  {
    institution: "Sri Chaitanya School, Hyderabad",
    degree: "Class 10th",
    period: "2020",
    score: "GPA: 10/10"
  }
];

export const SKILLS = {
  languages: ["Java", "Python", "C#", "JavaScript", "HTML/CSS"],
  frameworks: ["Spring Boot", ".Net", "React.js", "Node.js", "Flask", "FastAPI"],
  dataTools: ["Data Analysis", "Pandas", "NumPy", "MySQL", "Data Structures & Algorithms"],
  devOpsTools: ["AWS", "Git", "SDLC", "Agile Methodology"]
};

export const EXPERIENCE: Experience[] = [
  {
    role: "Full Stack Development Intern",
    company: "CodeClause",
    period: "Feb 2025 – Apr 2025",
    description: [
      "Engineered and deployed RESTful APIs using FastAPI, improving application scalability.",
      "Followed SDLC practices and collaborated in an Agile team environment.",
      "Executed secure authentication mechanisms, protecting user data for 100+ users.",
      "Integrated backend services with frontend components for end-to-end features."
    ]
  },
  {
    role: "Analyst Intern",
    company: "Cognify Technologies",
    period: "Nov 2023 – Dec 2023",
    description: [
      "Automated data processing tasks using scripts, cutting manual workload by 60%.",
      "Built and optimized SQL queries for efficient data retrieval.",
      "Developed Python-based data processing modules to transform structured datasets."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "DataFlow AI",
    period: "Jan 2026 - Present",
    tools: ["React.js", "Flask", "MySQL", "Machine Learning"],
    description: [
      "An automated Machine Learning Builder that streamlines the model creation process.",
      "Integrated a Flask backend to handle data processing and model training tasks.",
      "Designed a user-friendly React frontend for configuring ML parameters."
    ],
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "URLGuard",
    period: "Feb 2025 – May 2025",
    tools: ["Flask", "React", "Supabase", "Ensemble Learning", "XGBoost"],
    description: [
      "Lightweight Ensemble Model for Malicious URL Detection.",
      "Built secure backend services with user authentication and RBAC.",
      "Achieved 95% accuracy in classifying malicious URLs using Random Forest & XGBoost.",
      "Architected a secure full-stack application integrating ML inference."
    ],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Memory AI",
    period: "Dec 2025",
    tools: ["React", "Gemini API", "PWA", "Tailwind CSS"],
    description: [
      "A Progressive Web App acting as a 'Second Brain' to organize information automatically.",
      "Leverages Google Gemini AI to categorize and tag user inputs intelligently.",
      "Implements offline-first architecture for seamless user experience."
    ],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "HackerRank SQL Solutions",
    period: "Feb 2025",
    tools: ["MySQL", "Database", "Query Optimization"],
    description: [
      "A comprehensive repository of optimized solutions for HackerRank SQL challenges.",
      "Covers Basic to Advanced SQL concepts including complex joins and window functions.",
      "Received community recognition for clean and efficient query structures."
    ],
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=600"
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: "Oracle Certified AI Foundations Associate", issuer: "Oracle Cloud", date: "Aug 2025" },
  { name: "Machine Learning Specialization", issuer: "Stanford University", date: "Apr 2025" },
  { name: "Advanced SQL", issuer: "Hackerrank", date: "Sep 2024" },
  { name: "Data Analytics Essentials", issuer: "Cisco", date: "Aug 2024" }
];

export const ACHIEVEMENTS: Achievement[] = [
  { title: "Certificate of Merit - Naukri Campus Young Turks", date: "Oct 2024" }
];

export const CODING_PROFILES: CodingProfile[] = [
  { 
    platform: "LeetCode", 
    stats: "450+ Problems", 
    extra: "Global Rank: 181,753",
    link: "https://leetcode.com/u/Vishwas-1/"
  },
  { 
    platform: "HackerRank", 
    stats: "3 Badges", 
    extra: "4 Certifications",
    link: "https://www.hackerrank.com/profile/vishwas_chakilam"
  },
  { 
    platform: "CodeChef", 
    stats: "3 Star (1400+)", 
    extra: "250+ Problems",
    link: "https://www.codechef.com/users/vishwas_00"
  }
];