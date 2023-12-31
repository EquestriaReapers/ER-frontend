import { PROFILES_URL } from "./config";
import { MessageResponse } from "./config";
import axios from "axios";
import { BackendError } from "app/exceptions";

export default async function updateContactData(
  token: string,
  body: UpdateContactData
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

export interface UpdateContactData {
  countryResidence?: string;
  website?: string;
}
