export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  imageUrl: string;
  projectUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Publication {
  id: string;
  doi: string;
  title: string;
  description: string;
  imageUrl: string;
  paperUrl?: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: "frontend" | "backend" | "tools" | "other";
  proficiency: number;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string;
  technologies: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface NavItem {
  label: string;
  href: string;
}
