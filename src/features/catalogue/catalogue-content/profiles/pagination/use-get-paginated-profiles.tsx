import { Pagination, Profile } from "core/profiles/types";
import { fetchPaginatedProfiles } from "features/catalogue/services/get-paginated-profiles.service";
import { useErrorToast } from "hooks/use-error-toast";
import { useCallback } from "react";

const useGetPaginatedProfiles = ({
  setProfileList,
  setPagination,
  setCurrentSeed,
  currentPage,
  currentSeed,
}: Props) => {
  const { showErrorToast } = useErrorToast();
  const itemsPerPage: number = 6;
  const getProfileList = useCallback(async () => {
    try {
      const response = await fetchPaginatedProfiles(
        currentPage,
        itemsPerPage,
        currentSeed
      );
      setProfileList(response.profiles);
      setPagination(response.pagination);
      setCurrentSeed(response.pagination.randomSeed);
    } catch (error) {
      showErrorToast(error);
    }
  }, [
    currentPage,
    currentSeed,
    setPagination,
    setProfileList,
    setCurrentSeed,
    showErrorToast,
  ]);

  return { getProfileList };
};

interface Props {
  setProfileList: (profileList: Profile[]) => void;
  setPagination: (pagination: Pagination) => void;
  setCurrentSeed: (seed: number) => void;
  currentPage: number;
  currentSeed: number | null;
}
export default useGetPaginatedProfiles;
