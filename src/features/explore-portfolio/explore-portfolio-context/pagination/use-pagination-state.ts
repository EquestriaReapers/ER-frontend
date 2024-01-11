import { Pagination } from "core/profiles/types";
import { useState } from "react";
import { PortfolioSearchParams } from "../use-initial-portfolios-search-params";

const usePaginationState = (
  initialPortfolioSearchParams: PortfolioSearchParams
) => {
  const [currentPage, setCurrentPage] = useState(
    initialPortfolioSearchParams.page
  );

  const [pagination, setPagination] = useState<Pagination>({
    itemCount: 0,
    totalItems: 0,
    itemsPerPage: 0,
    totalPages: 0,
    currentPage: 0,
    randomSeed: 0,
  });

  /*useEffect(() => {
    if (pagination.currentPage !== currentPage)
      setCurrentPage(+pagination.currentPage);
  }, [currentPage, pagination.currentPage]);*/

  return {
    pagination: {
      ...pagination,
      currentPage,
    },
    setPagination,
    setCurrentPage,
    currentPage,
  };
};

export default usePaginationState;
