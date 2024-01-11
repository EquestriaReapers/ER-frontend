import axios from "axios";
import { PORTFOLIO_URL } from "./config";
import { BackendError } from "app/exceptions";
import { Portfolio } from "core/profiles/types";
import { PortfolioSearchParams } from "features/catalogue/catalogue-content/use-initial-catalogue-search-params";
import getUrlWithPaginatedParams from "./get-url-with-paginated-params";

export async function searchPostPaginatedPortfolios({
  currentPaginatedParams,
  limit,
  seed,
}: Props): Promise<Response> {
  try {
    const urlWithParams = getUrlWithPaginatedParams(
      PORTFOLIO_URL,
      currentPaginatedParams,
      limit,
      seed
    );
    console.log("url with params", urlWithParams);

    const {
      selectedSkills,
      selectedLanguagues,
      selectedLocations,
      selectedCareers,
    } = currentPaginatedParams;

    const bodyParams = {
      text: currentPaginatedParams.searchText,
      skills: generateArraySlug(selectedSkills),
      language: selectedLanguagues,
      countryResidence: selectedLocations,
      career: generateArraySlug(selectedCareers),
    };

    console.log("body params", bodyParams);

    const response = await axios.post(urlWithParams, bodyParams);
    console.log("AAAA", response);
    if (!response) throw new Error("Respuesta incomprensible del servidor");
    return response.data;
  } catch (error) {
    throw new BackendError(error);
  }
}

interface Response {
  portfolio: Portfolio[];
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
