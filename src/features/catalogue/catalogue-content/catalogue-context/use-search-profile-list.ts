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
  setLoading,
  selectedSkills,
}: Props) => {
  const { showErrorToast } = useErrorToast();
  const searchProfileList = useCallback(async () => {
    try {
      setLoading(true);
      const response = await searchPaginatedProfiles({
        page: currentPage,
        limit: PER_PAGE,
        seed,
        text,
        skills: selectedSkills,
      });
      setProfileList(response.profiles);
      setPagination(response.pagination);
    } catch (error) {
      showErrorToast(error);
    } finally {
      setLoading(false);
    }
  }, [
    setLoading,
    currentPage,
    seed,
    text,
    selectedSkills,
    setProfileList,
    setPagination,
    showErrorToast,
  ]);
  return searchProfileList;
};

interface Props {
  setProfileList: (profileList: Profile[]) => void;
  setPagination: (pagination: Pagination) => void;
  currentPage: number;
  seed: number | null;
  text: string;
  setLoading: (loading: boolean) => void;
  selectedSkills: string[];
}

export default useSearchProfileList;
