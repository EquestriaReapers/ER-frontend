import { useSearchParams } from "react-router-dom";

export default function useInitialPortfoliosSearchParams(): PortfolioSearchParams {
  const [searchParams] = useSearchParams();
  const paramsPage = searchParams.get("page");
  const paramsSearchText = searchParams.get("searchText");
  const paramsSelectedCareers = searchParams.get("selectedCareers");

  return {
    searchText: paramsSearchText || "",
    page: paramsPage ? parseInt(paramsPage) : 1,
    selectedCareers: paramsSelectedCareers
      ? paramsSelectedCareers.split(",")
      : [],
  };
}

export interface PortfolioSearchParams {
  searchText: string;
  page: number;
  selectedCareers: string[];
}
