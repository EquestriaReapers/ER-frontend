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
  education: Education[];
  experience: Experience[];
  portfolio: Portfolio[];
  skills: Skill[];
  languages: Language[];
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
  isVisible: boolean;
}

export interface LanguageOption {
  id: number;
  profileId: number;
  level: string;
  languageId: number;
  name: string;
  isVisible: boolean;
}

export interface Education {
  id: number;
  profileId: number;
  principal: boolean;
  isUCAB: boolean;
  title: string;
  entity: string;
  endDate: Date;
  deleteAt: Date | null;
  isVisible: boolean;
}

export interface Portfolio {
  id: number;
  profileId: number;
  title: string;
  description: string;
  location: string;
  dateEnd: Date;
  imagePrincipal: string | null;
  image: string[] | null;
  deletedAt: Date | null;
}
export enum LanguageLevel {
  Alto = "alto",
  Bajo = "bajo",
  Nativo = "nativo",
  Intermedio = "intermedio",
}

export const DICTIONARY_LANGUAGUE_OPTIONS: Record<LanguageLevel, string> = {
  [LanguageLevel.Alto]: "Alto",
  [LanguageLevel.Bajo]: "Bajo",
  [LanguageLevel.Nativo]: "Nativo",
  [LanguageLevel.Intermedio]: "Intermedio",
};
