import { BACKEND_V1_URL } from "app/config";
import { BackendError } from "app/exceptions";
import axios from "axios";
import { Profile } from "core/profiles/types";

const URL = `${BACKEND_V1_URL}/search`;

export async function searchPaginatedProfiles({
  page,
  limit,
  seed,
  text,
  skills,
}: Props): Promise<Response> {
  try {
    const paginatedUrl = getProfilesPaginatedUrl({
      page,
      limit,
      seed,
      skills,
    });
    const response = await axios.post(paginatedUrl, {
      text,
    });
    return response.data;
  } catch (error) {
    throw new BackendError(error);
  }
}

function getProfilesPaginatedUrl(urlProps: SearchUrlProps) {
  const { page, limit, seed, skills } = urlProps;
  const skillsQuery = skills ? `&skills=${skills.join(",")}` : "";
  return `${URL}?page=${page}&limit=${limit}&random=${seed}${skillsQuery}`;
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
  page: number;
  limit: number;
  seed: number | null;
  text: string | null;
  skills?: string[];
}

interface SearchUrlProps {
  page: number;
  limit: number;
  seed: number | null;
  skills?: string[];
}
