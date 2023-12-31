import { PROFILES_URL } from "./config";
import { MessageResponse } from "./config";
import axios from "axios";
import { BackendError } from "app/exceptions";

export async function updateProfileLocation(
  token: string,
  body: UpdateProfileLocation
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

export interface UpdateProfileLocation {
  countryResidence: string;
}
