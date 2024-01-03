import { Pagination, Profile } from "core/profiles/types";
import { searchPaginatedProfiles } from "core/profiles/get-search-paginated.service";
import { useErrorToast } from "hooks/use-error-toast";
import { useCallback } from "react";

const PER_PAGE = 6;

const useSearchProfileList = ({
  setProfileList,
  setPagination,
  currentPage,
  seed,
  text,
}: Props) => {
  const { showErrorToast } = useErrorToast();
  const searchProfileList = useCallback(async () => {
    try {
      const response = await searchPaginatedProfiles(
        currentPage,
        PER_PAGE,
        seed,
        text
      );
      setProfileList(response.profiles);
      setPagination(response.pagination);
    } catch (error) {
      showErrorToast(error);
    }
  }, [text, currentPage, seed, setProfileList, setPagination, showErrorToast]);
  return searchProfileList;
};

interface Props {
  setProfileList: (profileList: Profile[]) => void;
  setPagination: (pagination: Pagination) => void;
  currentPage: number;
  seed: number | null;
  text: string;
}

export default useSearchProfileList;
