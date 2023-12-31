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
  languageProfile: Lenguage[];
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
  level: string;
}

export interface ContactMethod {
  id: number;
  profileId: number;
  name: string;
}

export interface Location {
  id: number;
  name: string;
}

export interface Lenguage {
  id: number;
  profileId: number;
  level: string;
  languageId: number;
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
