import { User } from "core/users/types";

export interface Profile {
  userId: number;
  id: number;
  user: User;
  description: string;
  skills: Skill[];
  experience: Experience[];
}

export interface Skill {
  id: number;
  name: string;
}

export interface Experience {
  id: number;
  profileId: number;
  urlProyecto: string;
  cargo: string;
  descripcion: string;
  nombreProyecto: string;
  
}
