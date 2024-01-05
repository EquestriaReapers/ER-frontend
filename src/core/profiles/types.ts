import { SkillType } from "core/skills/types";
import { User } from "core/users/types";

export interface Profile {
  id: number;
  userId: number;
  user: User;
  description: string;
  mainTitle: string;
  countryResidence: string;
  website: string;
  experience: Experience[];
  skills: Skill[];
  languageProfile: Language[];
  contactMethods: ContactMethod[];
  deletedAt: Date | null;
}

export interface Pagination {
  itemCount: number;
  totalItems: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
  randomSeed: number;
}

export interface Skill {
  id: number;
  name: string;
  type: SkillType;
  level: string;
}

export interface ContactMethod {
  id: number;
  email: string;
}

export interface Location {
  id: number;
  name: string;
}

export interface Language {
  id: number;
  profileId: number;
  level: string;
  languageId: number;
  name: string;
  isVisible: boolean;
}

export interface Experience {
  id: number;
  profileId: number;
  businessName: string;
  role: string;
  startDate: Date;
  location: string;
  description: string;
  endDate: Date | null;
}

export interface LanguageOption {
  id: number;
  profileId: number;
  level: string;
  languageId: number;
  name: string;
  isVisible: boolean;
}
