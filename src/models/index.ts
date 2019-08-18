export default interface Resume {
  blogUrl: string;
  description: string;
  cover: string;
  name: string;
  photo: string;
  introduction: string[];
  skills: Skill[];
  careers: Career[];
  links: Link[];
  experiences: Action[];
  educations: Action[];
  licenses: Action[];
  aboutme: string[];
}

export interface Skill {
  name: string;
  items: string[];
}

export interface Action {
  name: string;
  information?: string;
  date?: ActionDate;
  description?: string[];
}

export interface ActionDate {
  start: string;
  end?: string;
}

export interface Career extends Action {
  techStacks: Skill[];
  projects: Project[];
}

export interface Project extends Action {
  parts: string[];
}

export interface Link {
  name: string;
  symbol: string;
  type: string;
}
