import React from "react";
import ProfileContext from "./context";
import useCatalogue from "./use-catalogue";
import { CatalogueSearchParams } from "../use-initial-catalogue-search-params";

export const CatalogueContextProvider = ({
  children,
  seed,
  initialCatalogueSearchParams,
}: Props) => {
  const {
    profileList,
    pagination,
    setCurrentPage,
    setProfileList,
    searchText,
    setSearchText,
    setPagination,
    currentPage,
    loading,
    searchProfileList,
    selectedSkills,
    setSelectedSkills,
    isExclusiveSkills,
    setIsExclusiveSkills,
    isExclusiveLanguague,
    selectedLanguagues,
    setSelectedLanguagues,
    setIsExclusiveLanguague,
    selectedCareers,
    setSelectedCareers,
    selectedLocations,
    setSelectedLocations,
  } = useCatalogue(seed, initialCatalogueSearchParams);

  const contextValue = {
    profileList,
    pagination,
    setCurrentPage,
    setProfileList,
    setPagination,
    searchText,
    setSearchText,
    seed,
    currentPage,
    loading,
    selectedSkills,
    setSelectedSkills,
    searchProfileList,
    isExclusiveSkills,
    setIsExclusiveSkills,
    isExclusiveLanguague,
    selectedLanguagues,
    setSelectedLanguagues,
    setIsExclusiveLanguague,
    selectedCareers,
    setSelectedCareers,
    selectedLocations,
    setSelectedLocations,
  };

  return (
    <ProfileContext.Provider value={contextValue}>
      {children}
    </ProfileContext.Provider>
  );
};

export interface Props {
  seed: number;
  initialCatalogueSearchParams: CatalogueSearchParams;
  children: React.ReactNode;
}

export default CatalogueContextProvider;
