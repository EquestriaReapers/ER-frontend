import { Pagination, Profile } from "core/profiles/types";
import { searchPaginatedProfiles } from "features/catalogue/services/search/search.service";
import { useErrorToast } from "hooks/use-error-toast";
import { useCallback } from "react";

const useSearchedValues = ({
  setProfileList,
  setPagination,
  currentPage,
  seed,
  text,
}: Props) => {
  const { showErrorToast } = useErrorToast();
  const searchProfileList = useCallback(async () => {
    try {
      console.log(text);
      const response = await searchPaginatedProfiles(
        currentPage,
        6,
        null,
        text
      );
      console.log(response.profiles);
      setProfileList(response.profiles);
      setPagination(response.pagination);
    } catch (error) {
      showErrorToast(error);
    }
  }, [setPagination, setProfileList, showErrorToast, currentPage, text]);
  return searchProfileList;
};
interface Props {
  setProfileList: (profileList: Profile[]) => void;
  setPagination: (pagination: Pagination) => void;
  currentPage: number;
  seed: number | null;
  text: string;
}
export default useSearchedValues;
