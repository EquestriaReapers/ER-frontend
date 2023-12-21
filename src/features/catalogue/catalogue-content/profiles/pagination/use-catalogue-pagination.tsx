import { ChangeEvent } from "react";

const useCataloguePagination = ({ setCurrentPage }: Props) => {
  const onPageChange = (event: ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
    event;
  };
  return { onPageChange };
};

interface Props {
  setCurrentPage: (currentPage: number) => void;
}
export default useCataloguePagination;
