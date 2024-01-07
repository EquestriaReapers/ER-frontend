import { Pagination, Profile } from "core/profiles/types";
import { searchPostPaginatedProfiles } from "core/profiles/get-post-search-paginated.service";
import { useErrorToast } from "hooks/use-error-toast";
import { useCallback } from "react";
import { CatalogueSearchParams } from "../use-initial-catalogue-search-params";

const PER_PAGE = 6;

const useSearchProfileList = ({
  setProfileList,
  setPagination,
  paginatedParams,
  seed,
  setLoading,
}: Props) => {
  const { showErrorToast } = useErrorToast();
  const _textPaginatedParams = JSON.stringify(paginatedParams);
  const searchProfileList = useCallback(async () => {
    try {
      const pagiantedParamJsons = JSON.parse(_textPaginatedParams);
      setLoading(true);
      const response = await searchPostPaginatedProfiles({
        currentPaginatedParams: pagiantedParamJsons,
        limit: PER_PAGE,
        seed,
      });
      setProfileList(response.profiles);
      setPagination(response.pagination);
    } catch (error) {
      showErrorToast(error);
    } finally {
      setLoading(false);
    }
  }, [
    _textPaginatedParams,
    setLoading,
    seed,
    setProfileList,
    setPagination,
    showErrorToast,
  ]);
  return searchProfileList;
};

interface Props {
  setProfileList: (profileList: Profile[]) => void;
  setPagination: (pagination: Pagination) => void;
  seed: number | null;
  setLoading: (loading: boolean) => void;
  paginatedParams: CatalogueSearchParams;
}

export default useSearchProfileList;
