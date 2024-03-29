import React from "react";
import ProfileContext from "./context";
import usePortfolio from "./use-explore-portfolios";
import { PortfolioSearchParams } from "./use-initial-portfolios-search-params";

export const PortfoliosContextProvider = ({
  children,
  seed,
  initialPortfoliosSearchParams,
}: Props) => {
  const {
    projects,
    pagination,
    setCurrentPage,
    setProjects,
    searchText,
    setSearchText,
    setPagination,
    currentPage,
    loading,
    searchProjects,
    selectedCareers,
    setSelectedCareers,
  } = usePortfolio(seed, initialPortfoliosSearchParams);

  const contextValue = {
    projects,
    pagination,
    setCurrentPage,
    setProjects,
    setPagination,
    searchText,
    setSearchText,
    seed,
    currentPage,
    loading,
    searchProjects,
    selectedCareers,
    setSelectedCareers,
  };

  return (
    <ProfileContext.Provider value={contextValue}>
      {children}
    </ProfileContext.Provider>
  );
};

export interface Props {
  seed: number;
  initialPortfoliosSearchParams: PortfolioSearchParams;
  children: React.ReactNode;
}

export default PortfoliosContextProvider;
