import { PortfolioSearchParams } from "features/explore-portfolio/explore-portfolio-context/use-initial-portfolios-search-params";

export default function getUrlWithPaginatedParams(
  urlBase: string,
  currentPaginatedParams: PortfolioSearchParams,
  limit: number,
  currentSeed: number | null
): string {
  const { searchText, page } = currentPaginatedParams;
  const searchTextComplement = searchText ? `&searchText=${searchText}` : "";

  const seedComplement = currentSeed ? `&random=${currentSeed}` : "";
  const url = `${urlBase}?page=${page}&limit=${limit}${searchTextComplement}${seedComplement}`;

  return url;
}
