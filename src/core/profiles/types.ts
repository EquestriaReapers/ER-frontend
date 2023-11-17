import { User } from "core/users/types";

export interface Profile {
  user: User,
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
