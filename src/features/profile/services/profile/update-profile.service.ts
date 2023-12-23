import { PROFILES_URL } from "./config/config";
import { MessageResponse } from "./config/config";
import axios from "axios";
import { BackendError } from "app/exceptions";

export async function updateProfile(
  token: string,
  body: UpdateProfileBody
): Promise<MessageResponse> {
  try {
    const response = await axios.patch(`${PROFILES_URL}/my-profile`, body, {
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
  mainTitle: string;
  lastname: string;
  name: string;
}
