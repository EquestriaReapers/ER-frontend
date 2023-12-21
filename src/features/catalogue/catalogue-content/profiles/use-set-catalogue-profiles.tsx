import { useEffect, useState } from "react";
import useGetPaginatedProfiles from "./pagination/use-get-paginated-profiles";
import usePaginatedProfilesState from "./pagination/use-paginated-profiles-state";

const useSetCatalogueProfiles = () => {
  const { profileList, pagination, setProfileList, setPagination } =
    usePaginatedProfilesState();
  const [currentPage, setCurrentPage] = useState(1);
  const [currentSeed, setCurrentSeed] = useState<number | null>(null);

  const { getProfileList } = useGetPaginatedProfiles({
    setProfileList,
    setPagination,
    setCurrentSeed,
    currentPage,
    currentSeed,
  });

  useEffect(() => {
    getProfileList();
  }, [getProfileList]);
  return { profileList, currentPage, pagination, setCurrentPage };
};

export default useSetCatalogueProfiles;
