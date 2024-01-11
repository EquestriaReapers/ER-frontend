import { Pagination, Portfolio } from "core/profiles/types";
import { useErrorToast } from "hooks/use-error-toast";
import { useCallback } from "react";
import { PortfolioSearchParams } from "./use-initial-portfolios-search-params";
import { searchPostPaginatedPortfolios } from "core/portfolio/search-projects.service";

const PER_PAGE = 6;

const useSearchProjects = ({
  setProjects,
  setPagination,
  paginatedParams,
  seed,
  setLoading,
}: Props) => {
  const { showErrorToast } = useErrorToast();
  const _textPaginatedParams = JSON.stringify(paginatedParams);
  const searchProjects = useCallback(async () => {
    try {
      const pagiantedParamJsons = JSON.parse(_textPaginatedParams);
      setLoading(true);
      const response = await searchPostPaginatedPortfolios({
        currentPaginatedParams: pagiantedParamJsons,
        limit: PER_PAGE,
        seed,
      });
      setProjects(response.portfolios);
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
    setProjects,
    setPagination,
    showErrorToast,
  ]);
  return searchProjects;
};

interface Props {
  setProjects: (projects: Portfolio[]) => void;
  setPagination: (pagination: Pagination) => void;
  seed: number | null;
  setLoading: (loading: boolean) => void;
  paginatedParams: PortfolioSearchParams;
}

export default useSearchProjects;
