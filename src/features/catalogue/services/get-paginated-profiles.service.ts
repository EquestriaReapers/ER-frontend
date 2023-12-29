import { BACKEND_V1_URL } from "app/config";
import { BackendError } from "app/exceptions";
import axios from "axios";
import { Profile } from "core/profiles/types";

const URL = `${BACKEND_V1_URL}/profiles`;

export async function fetchPaginatedProfiles(
  page: number,
  limit: number,
  currentSeed: number | null
): Promise<Response> {
  try {
    const response = await axios.get(
      `${URL}?page=${page}&limit=${limit}&random=${currentSeed}`
    );
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
