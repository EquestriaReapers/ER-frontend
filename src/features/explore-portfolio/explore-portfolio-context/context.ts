import { createContext } from "react";
import { Pagination, Profile } from "core/profiles/types";

const ProfileContext = createContext<CatalogueContextI>({
  profileList: [],
  pagination: {
    itemCount: 0,
    totalItems: 0,
    itemsPerPage: 0,
    totalPages: 0,
    currentPage: 0,
    randomSeed: 0,
  },
  setCurrentPage: (() => {}) as React.Dispatch<React.SetStateAction<number>>,
  setProfileList: (() => {}) as React.Dispatch<React.SetStateAction<Profile[]>>,
  searchText: "",
  setSearchText: (() => {}) as React.Dispatch<React.SetStateAction<string>>,
  setPagination: (() => {}) as unknown as React.Dispatch<
    React.SetStateAction<Pagination>
  >,
  currentPage: 0,
  loading: false,
  seed: 0,
  searchProfileList: async () => {},
  selectedSkills: [],
  setSelectedSkills: (() => {}) as React.Dispatch<
    React.SetStateAction<string[]>
  >,
  isExclusiveSkills: false,
  setIsExclusiveSkills: (() => {}) as React.Dispatch<
    React.SetStateAction<boolean>
  >,
  selectedLanguagues: [],
  setSelectedLanguagues: (() => {}) as React.Dispatch<
    React.SetStateAction<string[]>
  >,
  isExclusiveLanguague: false,
  setIsExclusiveLanguague: (() => {}) as React.Dispatch<
    React.SetStateAction<boolean>
  >,
  selectedLocations: [],
  setSelectedLocations: (() => {}) as React.Dispatch<
    React.SetStateAction<string[]>
  >,
  selectedCareers: [],
  setSelectedCareers: (() => {}) as React.Dispatch<
    React.SetStateAction<string[]>
  >,
});

export interface CatalogueContextI {
  profileList: Profile[];
  pagination: Pagination;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  setProfileList: React.Dispatch<React.SetStateAction<Profile[]>>;
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  setPagination: React.Dispatch<React.SetStateAction<Pagination>>;
  currentPage: number;
  loading: boolean;
  seed: number;
  searchProfileList: () => Promise<void>;
  // Skills
  selectedSkills: string[];
  setSelectedSkills: React.Dispatch<React.SetStateAction<string[]>>;
  isExclusiveSkills: boolean;
  setIsExclusiveSkills: React.Dispatch<React.SetStateAction<boolean>>;
  // Languagues
  selectedLanguagues: string[];
  setSelectedLanguagues: React.Dispatch<React.SetStateAction<string[]>>;
  isExclusiveLanguague: boolean;
  setIsExclusiveLanguague: React.Dispatch<React.SetStateAction<boolean>>;
  // Locations
  selectedLocations: string[];
  setSelectedLocations: React.Dispatch<React.SetStateAction<string[]>>;
  // Careers
  selectedCareers: string[];
  setSelectedCareers: React.Dispatch<React.SetStateAction<string[]>>;
}

export default ProfileContext;
