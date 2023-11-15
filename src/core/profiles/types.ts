export interface Profile {
  user: {
    id: number;
    name: string;
    email: string;
    role: string;
  };
  role: string;
  description: string;
}

export interface Skill {
  id: number;
  name: string;
}

export interface Experience {
  id: number;
  url: string;
  position: string;
  entityName?: string;
  description: string;
  projectName: string;
}
