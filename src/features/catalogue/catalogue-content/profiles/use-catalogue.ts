import { useEffect } from "react";
import useProfileList from "./pagination/use-profile-list";
import usePaginationState from "./pagination/use-pagination-state";
import useSearchProfileList from "./use-search-profile-list";
import useSearchBarState from "./use-search-bar-state";

const useCatalogue = (seed: number | null) => {
  const { profileList, setProfileList } = useProfileList();
  const { setCurrentPage, pagination, setPagination } = usePaginationState();
  const { text } = useSearchBarState();
  text;

  const searchProfileList = useSearchProfileList({
    setProfileList,
    setPagination,
    currentPage: pagination.currentPage,
    seed,
    text: "luis",
  });

  useEffect(() => {
    searchProfileList();
  }, [searchProfileList]);

  return {
    profileList,
    pagination,
    setCurrentPage,
  };
};

export default useCatalogue;
