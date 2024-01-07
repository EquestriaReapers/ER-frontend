import { BACKEND_V1_URL } from "app/config";
import { BackendError } from "app/exceptions";
import axios from "axios";
import { Profile } from "core/profiles/types";
import { CatalogueSearchParams } from "features/catalogue/catalogue-content/use-initial-catalogue-search-params";
import getUrlWithPaginatedParams from "./get-url-with-paginated-params";

const URL = `${BACKEND_V1_URL}/search`;

export async function searchPostPaginatedProfiles({
  currentPaginatedParams,
  limit,
  seed,
}: Props): Promise<Response> {
  try {
    const urlWithParams = getUrlWithPaginatedParams(
      URL,
      currentPaginatedParams,
      limit,
      seed
    );
    console.log("url with params", urlWithParams);

    const response = await axios.post(urlWithParams, {
      text: currentPaginatedParams.searchText,
    });
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

interface Props {
  currentPaginatedParams: CatalogueSearchParams;
  limit: number;
  seed: number | null;
}
