import axios from "axios";
import { SEARCH_PORTFOLIOS_URL } from "./config";
import { BackendError } from "app/exceptions";
import { Portfolio } from "core/profiles/types";
import getUrlWithPaginatedParams from "./get-url-with-paginated-params";
import { PortfolioSearchParams } from "features/explore-portfolio/explore-portfolio-context/use-initial-portfolios-search-params";

export async function searchPostPaginatedPortfolios({
  currentPaginatedParams,
  limit,
  seed,
}: Props): Promise<Response> {
  try {
    const urlWithParams = getUrlWithPaginatedParams(
      SEARCH_PORTFOLIOS_URL,
      currentPaginatedParams,
      limit,
      seed
    );

    const { selectedCareers } = currentPaginatedParams;

    const bodyParams = {
      text: currentPaginatedParams.searchText,
      career: generateArraySlug(selectedCareers),
    };
    const response = await axios.post(urlWithParams, bodyParams);

    if (!response) throw new Error("Respuesta incomprensible del servidor");
    return response.data;
  } catch (error) {
    throw new BackendError(error);
  }
}

interface Response {
  portfolios: Portfolio[];
  pagination: {
    itemCount: number;
    totalItems: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
    randomSeed: number;
  };
}

function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") // Reemplaza caracteres no alfanuméricos con '-'
    .replace(/^-+|-+$/g, ""); // Elimina guiones al principio y al final
}

function generateArraySlug(text: string[]): string[] {
  return text.map((item) => generateSlug(item));
}

interface Props {
  currentPaginatedParams: PortfolioSearchParams;
  limit: number;
  seed: number | null;
}
