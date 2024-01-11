import { useEffect, useMemo, useState } from "react";

import usePaginationState from "./pagination/use-pagination-state";
import useSearchProjects from "./use-search-projects";
import { useSearchParams } from "react-router-dom";
import { PortfolioSearchParams } from "./use-initial-portfolios-search-params";
import useProjectsList from "./pagination/use-projects-list";

const usePortfolio = (
  seed: number | null,
  initialPortfolioSearchParams: PortfolioSearchParams
) => {
  const [selectedCareers, setSelectedCareers] = useState<string[]>(
    initialPortfolioSearchParams.selectedCareers
  );

  const [loading, setLoading] = useState(false);
  const { projects, setProjects } = useProjectsList();
  const { setCurrentPage, pagination, setPagination, currentPage } =
    usePaginationState(initialPortfolioSearchParams);
  const [searchText, setSearchText] = useState<string>(
    initialPortfolioSearchParams.searchText
  );

  const paginatedParams = useMemo(() => {
    return {
      searchText,
      page: currentPage,
      selectedCareers,
    };
  }, [currentPage, searchText, selectedCareers]);

  const searchProjects = useSearchProjects({
    setProjects,
    setPagination,
    paginatedParams,
    seed,
    setLoading,
  });

  useEffect(() => {
    searchProjects();
  }, [searchProjects]);

  useChangeUrlOnChangeParams(paginatedParams);

  return {
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
  };
};

function useChangeUrlOnChangeParams({
  searchText,
  page,
  selectedCareers,
}: PortfolioSearchParams) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setSearchParams] = useSearchParams();

  useEffect(() => {
    const params: Record<string, string> = {};

    if (searchText) {
      params["searchText"] = searchText;
    }

    if (page !== null || page !== undefined) {
      params["page"] = page + "";
    }

    if (selectedCareers.length) {
      params["selectedCareers"] = selectedCareers.join(",");
    }

    const paramsObject = new URLSearchParams(params);
    setSearchParams(paramsObject.toString());
  }, [page, searchText, selectedCareers, setSearchParams]);
}

export default usePortfolio;
