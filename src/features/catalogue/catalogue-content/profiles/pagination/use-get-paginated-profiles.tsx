import { Pagination, Profile } from "core/profiles/types";
import { fetchPaginatedProfiles } from "features/catalogue/services/get-paginated-profiles.service";
import { useErrorToast } from "hooks/use-error-toast";
import { useCallback } from "react";

const useGetPaginatedProfiles = ({
  setProfileList,
  setPagination,
  currentPage,
  seed,
}: Props) => {
  const { showErrorToast } = useErrorToast();
  const itemsPerPage: number = 6;
  const getProfileList = useCallback(async () => {
    try {
      if (!seed) return;
      const response = await fetchPaginatedProfiles(
        currentPage,
        itemsPerPage,
        seed
      );
      setProfileList(response.profiles);
      setPagination(response.pagination);
    } catch (error) {
      showErrorToast(error);
    }
  }, [currentPage, seed, setPagination, setProfileList, showErrorToast]);

  return { getProfileList };
};

interface Props {
  setProfileList: (profileList: Profile[]) => void;
  setPagination: (pagination: Pagination) => void;
  currentPage: number;
  seed: number | null;
}
export default useGetPaginatedProfiles;
