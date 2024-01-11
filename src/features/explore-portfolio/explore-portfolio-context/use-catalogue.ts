import { useEffect, useMemo, useState } from "react";
import useProfileList from "./pagination/use-profile-list";
import usePaginationState from "./pagination/use-pagination-state";
import useSearchProfileList from "./use-search-profile-list";
import { useSearchParams } from "react-router-dom";
import { CatalogueSearchParams } from "../use-initial-catalogue-search-params";

const useCatalogue = (
  seed: number | null,
  initialCatalogueSearchParams: CatalogueSearchParams
) => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>(
    initialCatalogueSearchParams.selectedSkills
  );
  const [selectedLanguagues, setSelectedLanguagues] = useState<string[]>(
    initialCatalogueSearchParams.selectedLanguagues
  );
  const [selectedLocations, setSelectedLocations] = useState<string[]>(
    initialCatalogueSearchParams.selectedLocations
  );
  const [selectedCareers, setSelectedCareers] = useState<string[]>(
    initialCatalogueSearchParams.selectedCareers
  );
  const [isExclusiveSkills, setIsExclusiveSkills] = useState<boolean>(
    initialCatalogueSearchParams.isExclusiveSkills
  );
  const [isExclusiveLanguague, setIsExclusiveLanguague] = useState<boolean>(
    initialCatalogueSearchParams.isExclusiveLanguague
  );

  const [loading, setLoading] = useState(false);
  const { profileList, setProfileList } = useProfileList();
  const { setCurrentPage, pagination, setPagination, currentPage } =
    usePaginationState(initialCatalogueSearchParams);
  const [searchText, setSearchText] = useState<string>(
    initialCatalogueSearchParams.searchText
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

  const searchProfileList = useSearchProfileList({
    setProfileList,
    setPagination,
    paginatedParams,
    seed,
    setLoading,
  });

  useEffect(() => {
    searchProfileList();
  }, [searchProfileList]);

  useChangeUrlOnChangeParams(paginatedParams);

  return {
    profileList,
    pagination,
    setCurrentPage,
    setProfileList,
    searchText,
    setSearchText,
    setPagination,
    currentPage,
    loading,
    selectedSkills,
    setSelectedSkills,
    searchProfileList,
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
}: CatalogueSearchParams) {
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

export default useCatalogue;
