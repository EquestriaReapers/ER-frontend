import { useEffect, useState } from "react";
import useGetPaginatedProfiles from "./pagination/use-get-paginated-profiles";
import usePaginatedProfilesState from "./pagination/use-paginated-profiles-state";
import useSeed from "features/catalogue/catalogue-content/hooks/use-seed";

const useSetCatalogueProfiles = () => {
  const { profileList, pagination, setProfileList, setPagination } =
    usePaginatedProfilesState();

  const [currentPage, setCurrentPage] = useState(1);
  const seed = useSeed();

  const { getProfileList } = useGetPaginatedProfiles({
    setProfileList,
    setPagination,
    currentPage,
    seed,
  });

  useEffect(() => {
    getProfileList();
  }, [getProfileList]);

  return { profileList, currentPage, seed, pagination, setCurrentPage };
};

export default useSetCatalogueProfiles;
