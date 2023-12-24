import { useCallback, useEffect, useState } from "react";
import useGetPaginatedProfiles from "./pagination/use-get-paginated-profiles";
import usePaginatedProfilesState from "./pagination/use-paginated-profiles-state";
import useSeed from "features/catalogue/catalogue-content/hooks/use-seed";
import { searchPaginatedProfiles } from "features/catalogue/services/search/search.service";
import { useErrorToast } from "hooks/use-error-toast";

const useSetCatalogueProfiles = () => {
  const { profileList, pagination, setProfileList, setPagination } =
    usePaginatedProfilesState();

  const [currentPage, setCurrentPage] = useState(1);
  const seed = useSeed();

  const getProfileList = useGetPaginatedProfiles({
    setProfileList,
    setPagination,
    currentPage,
    seed,
  });
  const { showErrorToast } = useErrorToast();

  const searchProfileList = useCallback(
    async (text: string) => {
      try {
        const response = await searchPaginatedProfiles(
          currentPage,
          6,
          null,
          text
        );
        setProfileList(response.profiles);
        setPagination(response.pagination);
      } catch (error) {
        showErrorToast(error);
      }
    },
    [setPagination, setProfileList, showErrorToast, currentPage]
  );

  useEffect(() => {
    getProfileList();
  }, [getProfileList]);

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
