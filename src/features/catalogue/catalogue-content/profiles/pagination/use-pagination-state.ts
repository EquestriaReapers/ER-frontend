import { Pagination } from "core/profiles/types";
import { useState } from "react";

const usePaginationState = () => {
  const [currentPage, setCurrentPage] = useState(1);

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
  };
};

export default usePaginationState;
