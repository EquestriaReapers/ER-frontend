import { BACKEND_V1_URL } from "app/config";
import { BackendError } from "app/exceptions";
import axios from "axios";
import { User } from "core/users/types";

const URL = `${BACKEND_V1_URL}/profiles`;

export async function fetchOneProfile(
  token: string,
  profile_id: number
): Promise<OneProfileResponse> {
  try {
    const response = await axios.get(URL + "/" + profile_id, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new BackendError(error);
  }
}

export async function updateProfile(
  token: string,
  body: updateProfileBody,
  profile_id: number
) {
  try {
    const response = await axios.patch(URL + "/" + profile_id, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new BackendError(error);
  }
}

export interface updateProfileBody {
  description: string;
  image: string;
  user: User;
}

export interface OneProfileResponse {
  userId: number;
  description: string;
  image: string;
  user: User;
}
