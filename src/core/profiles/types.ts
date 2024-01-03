import { User } from "core/users/types";

export interface Profile {
  id: number;
  userId: number;
  user: User;
  description: string;
  mainTitle: string;
  countryResidence: string;
  education: Education[];
  experience: Experience[];
  portfolio: Portfolio[];
  skills: Skill[];
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

export interface Education {
  id: number;
  profileId: number;
  principal: boolean;
  isUCAB: boolean;
  title: string;
  entity: string;
  endDate: Date;
  deleteAt: Date | null;
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
