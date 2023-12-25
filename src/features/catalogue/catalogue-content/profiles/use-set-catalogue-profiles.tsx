import { useEffect, useState } from "react";
import useGetPaginatedProfiles from "./pagination/use-get-paginated-profiles";
import usePaginatedProfilesState from "./pagination/use-paginated-profiles-state";
import useSeed from "features/catalogue/catalogue-content/hooks/use-seed";
import useSearchBarState from "./use-search-bar-state";
import useSearchedValues from "./use-searched-values";

const useSetCatalogueProfiles = () => {
  const { profileList, pagination, setProfileList, setPagination } =
    usePaginatedProfilesState();
  const { text, setText } = useSearchBarState();
  const [currentPage, setCurrentPage] = useState(1);
  const seed = useSeed();

  const getProfileList = useGetPaginatedProfiles({
    setProfileList,
    setPagination,
    currentPage,
    seed,
  });

  const searchProfileList = useSearchedValues({
    setProfileList,
    setPagination,
    currentPage,
    seed,
    text,
    setText,
  });

  useEffect(() => {
    searchProfileList();
    getProfileList();
  }, [getProfileList, searchProfileList]);

  return {
    profileList,
    currentPage,
    seed,
    pagination,
    setCurrentPage,
    searchProfileList,
  };
};

export default useSetCatalogueProfiles;
