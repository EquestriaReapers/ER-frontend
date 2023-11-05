export interface ProfileInterface {
  id: number;
  name: string;
  email: string;
  image: string;
}

export interface SkillInterface {
  id: number;
  name: string;
}

export interface ExperienceInterface {
  id: number;
  url: string;
  position: string;
  entityName?: string;
  description: string;
  projectName: string;
}
