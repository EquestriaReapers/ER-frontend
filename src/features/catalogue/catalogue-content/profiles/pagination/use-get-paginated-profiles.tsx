import { Pagination, Profile } from "core/profiles/types";
import { fetchPaginatedProfiles } from "features/catalogue/services/get-paginated-profiles.service";
import { searchPaginatedProfiles } from "features/catalogue/services/search/search.service";
import { useErrorToast } from "hooks/use-error-toast";
import { useCallback } from "react";

const useGetPaginatedProfiles = ({
  setProfileList,
  setPagination,
  currentPage,
  seed,
  text,
  setText,
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

  const searchProfileList = useCallback(async () => {
    try {
      if (text === null) setText("");
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
  }, [
    setPagination,
    setProfileList,
    showErrorToast,
    currentPage,
    text,
    setText,
  ]);

  return { getProfileList, searchProfileList };
};

interface Props {
  setProfileList: (profileList: Profile[]) => void;
  setPagination: (pagination: Pagination) => void;
  currentPage: number;
  seed: number | null;
  text: string;
  setText: (text: string) => void;
}
export default useGetPaginatedProfiles;
