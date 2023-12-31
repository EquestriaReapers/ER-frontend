import { BACKEND_V1_URL } from "app/config";
import { BackendError } from "app/exceptions";
import axios from "axios";
import { Profile } from "core/profiles/types";
import { CatalogueSearchParams } from "features/catalogue/catalogue-content/use-initial-catalogue-search-params";
import getUrlWithPaginatedParams from "./get-url-with-paginated-params";

const URL = `${BACKEND_V1_URL}/profiles`;

export async function fetchPaginatedProfiles(
  currentPaginatedParams: CatalogueSearchParams,
  limit: number,
  currentSeed: number | null
): Promise<Response> {
  try {
    const urlWithParams = getUrlWithPaginatedParams(
      URL,
      currentPaginatedParams,
      limit,
      currentSeed
    );
    console.log("url with params", urlWithParams);
    const response = await axios.get(urlWithParams);
    return response.data;
  } catch (error) {
    throw new BackendError(error);
  }
}

interface Response {
  profiles: Profile[];
  pagination: {
    itemCount: number;
    totalItems: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
    randomSeed: number;
  };
}
/*
export interface CatalogueSearchParams {
  searchText: string;
  page: number;
  // Selector exclusivo / inclusivo de habilidades
  selectedSkills: string[];
  isExclusiveSkills: boolean;
  // Selector exclusivo / inclusivo de idiomas
  selectedLanguagues: string[];
  isExclusiveLanguague: boolean;
  // Otros selectores siempre inclusivos
  selectedLocations: string[];
  selectedCareers: string[];
}

*/
