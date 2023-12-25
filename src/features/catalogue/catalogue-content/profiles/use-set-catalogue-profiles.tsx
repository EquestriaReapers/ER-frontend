import { useEffect, useState } from "react";
import useGetPaginatedProfiles from "./pagination/use-get-paginated-profiles";
import usePaginatedProfilesState from "./pagination/use-paginated-profiles-state";
import useSeed from "features/catalogue/catalogue-content/hooks/use-seed";
import useSearchBarState from "./use-search-bar-state";

const useSetCatalogueProfiles = () => {
  const { profileList, pagination, setProfileList, setPagination } =
    usePaginatedProfilesState();
  const { text, setText } = useSearchBarState();
  const [currentPage, setCurrentPage] = useState(1);
  const seed = useSeed();

  const { getProfileList, searchProfileList } = useGetPaginatedProfiles({
    setProfileList,
    setPagination,
    currentPage,
    seed,
    text,
    setText,
  });

  useEffect(() => {
    getProfileList();
    searchProfileList();
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
