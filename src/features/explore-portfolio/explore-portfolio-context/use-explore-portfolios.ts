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
  const [selectedSkills, setSelectedSkills] = useState<string[]>(
    initialPortfolioSearchParams.selectedSkills
  );
  const [selectedLanguagues, setSelectedLanguagues] = useState<string[]>(
    initialPortfolioSearchParams.selectedLanguagues
  );
  const [selectedLocations, setSelectedLocations] = useState<string[]>(
    initialPortfolioSearchParams.selectedLocations
  );
  const [selectedCareers, setSelectedCareers] = useState<string[]>(
    initialPortfolioSearchParams.selectedCareers
  );
  const [isExclusiveSkills, setIsExclusiveSkills] = useState<boolean>(
    initialPortfolioSearchParams.isExclusiveSkills
  );
  const [isExclusiveLanguague, setIsExclusiveLanguague] = useState<boolean>(
    initialPortfolioSearchParams.isExclusiveLanguague
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
      selectedSkills,
      selectedLanguagues,
      selectedLocations,
      selectedCareers,
      isExclusiveSkills,
      isExclusiveLanguague,
    };
  }, [
    currentPage,
    isExclusiveLanguague,
    isExclusiveSkills,
    searchText,
    selectedCareers,
    selectedLanguagues,
    selectedLocations,
    selectedSkills,
  ]);

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
    selectedSkills,
    setSelectedSkills,
    searchProjects,
    isExclusiveSkills,
    setIsExclusiveSkills,
    selectedLanguagues,
    setSelectedLanguagues,
    isExclusiveLanguague,
    setIsExclusiveLanguague,
    selectedLocations,
    setSelectedLocations,
    selectedCareers,
    setSelectedCareers,
  };
};

function useChangeUrlOnChangeParams({
  searchText,
  selectedSkills,
  page,
  selectedLanguagues,
  selectedLocations,
  selectedCareers,
  isExclusiveSkills,
  isExclusiveLanguague,
}: PortfolioSearchParams) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setSearchParams] = useSearchParams();

  useEffect(() => {
    const params: Record<string, string> = {};

    if (searchText) {
      params["searchText"] = searchText;
    }

    if (selectedSkills.length) {
      params["selectedSkills"] = selectedSkills.join(",");
    }

    if (page !== null || page !== undefined) {
      params["page"] = page + "";
    }

    if (selectedLanguagues.length) {
      params["selectedLanguagues"] = selectedLanguagues.join(",");
    }

    if (selectedLocations.length) {
      params["selectedLocations"] = selectedLocations.join(",");
    }

    if (selectedCareers.length) {
      params["selectedCareers"] = selectedCareers.join(",");
    }

    params["isExclusiveSkills"] = isExclusiveSkills + "";

    params["isExclusiveLanguague"] = isExclusiveLanguague + "";

    const paramsObject = new URLSearchParams(params);
    setSearchParams(paramsObject.toString());
  }, [
    isExclusiveLanguague,
    isExclusiveSkills,
    page,
    searchText,
    selectedCareers,
    selectedLanguagues,
    selectedLocations,
    selectedSkills,
    setSearchParams,
  ]);
}

export default usePortfolio;
