export interface Link {
  name: string;
  symbol: string;
  type: string;
}

export interface Skill {
  name: string;
  items: string[];
}

export interface WorkPeriod {
  start: string;
  end: string;
}

export interface TechStack {
  name: string;
  items: string[];
}

export interface Period {
  start: string;
  end: string;
}

export interface Project {
  name: string;
  period: Period;
  description: string;
  parts: string[];
}

export interface Career {
  name: string;
  role: string;
  workPeriod: WorkPeriod;
  techStacks: TechStack[];
  projects: Project[];
}

export interface Period2 {
  start: string;
  end: string;
}

export interface Experience {
  name: string;
  role: string;
  period: Period2;
  description: string[];
}

export interface Period3 {
  start: string;
  end: string;
}

export interface Education {
  name: string;
  period: Period3;
  description: string;
}

export interface License {
  name: string;
  role: string;
  date: string;
  description: string;
}

export default interface Resume {
  blogUrl: string;
  description: string;
  cover: string;
  name: string;
  photo: string;
  introduction: string[];
  links: Link[];
  skills: Skill[];
  careers: Career[];
  experiences: Experience[];
  educations: Education[];
  licenses: License[];
  aboutme: string[];
}
