import { BACKEND_V1_URL } from "app/config";
import { BackendError } from "app/exceptions";
import axios from "axios";
import { User } from "core/users/types";

const URL = `${BACKEND_V1_URL}/profiles`;

export async function fetchOneProfile(
  token: string,
  profileId: number
): Promise<OneProfileResponse> {
  try {
    const response = await axios.get(`${URL}/${profileId}`, {
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
  body: UpdateProfileBody,
  profileId: number
) {
  try {
    const response = await axios.patch(`${URL}/${profileId}`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new BackendError(error);
  }
}

export interface UpdateProfileBody {
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
