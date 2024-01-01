import { BACKEND_V1_URL } from "app/config";
import { BackendError } from "app/exceptions";
import axios from "axios";
import { Profile } from "core/profiles/types";

const URL = `${BACKEND_V1_URL}/search`;

export async function searchPaginatedProfiles(
  page: number,
  limit: number,
  seed: number | null,
  text: string | null
): Promise<Response> {
  try {
    const response = await axios.post(
      `${URL}?page=${page}&limit=${limit}&random=${seed}`,
      {
        text,
      }
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
