import { Pagination } from "core/profiles/types";
import { createContext } from "react";

const PortfoliosContext = createContext<PortfoliosContextI>({
  projects: [],
  pagination: {
    itemCount: 0,
    totalItems: 0,
    itemsPerPage: 0,
    totalPages: 0,
    currentPage: 0,
    randomSeed: 0,
  },
  setCurrentPage: (() => {}) as React.Dispatch<React.SetStateAction<number>>,
  setProjects: (() => {}) as React.Dispatch<React.SetStateAction<Project[]>>,
  searchText: "",
  setSearchText: (() => {}) as React.Dispatch<React.SetStateAction<string>>,
  setPagination: (() => {}) as unknown as React.Dispatch<
    React.SetStateAction<Pagination>
  >,
  currentPage: 0,
  loading: false,
  seed: 0,
  searchProjects: async () => {},
  selectedCareers: [],
  setSelectedCareers: (() => {}) as React.Dispatch<
    React.SetStateAction<string[]>
  >,
});

export interface Project {
  id: number;
  title: string;
  profileId: number;
  description: string;
  location: string;
  dateEnd: string;
  imagePrincipal: string;
  image: string[];
  url: null;
  profile: {
    name: string;
    lastname: string;
    mainTitle: string;
  };
}

export interface PortfoliosContextI {
  projects: Project[];
  pagination: Pagination;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  setPagination: React.Dispatch<React.SetStateAction<Pagination>>;
  currentPage: number;
  loading: boolean;
  seed: number;
  searchProjects: () => Promise<void>;
  selectedCareers: string[];
  setSelectedCareers: React.Dispatch<React.SetStateAction<string[]>>;
}

export default PortfoliosContext;
