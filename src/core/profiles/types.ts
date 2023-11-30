import { User } from "core/users/types";

export interface Profile {
  id: number;
  userId: number;
  user: User;
  description: string;
  mainTitle: string;
  countryResidence: string;
  experience: Experience[];
  skills: Skill[];
  deletedAt: Date | null;
}

export interface Skill {
  id: number;
  name: string;
  level: string;
}

export interface Experience {
  id: number;
  profileId: number;
  name: string;
  role: string;
  startDate: Date;
  endDate: Date | null;
}
