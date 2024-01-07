import { PROFILES_URL } from "./config";
import { MessageResponse } from "./config";
import axios from "axios";
import { BackendError } from "app/exceptions";

export async function removeProfileLanguage(
  token: string,
  languageId: number
): Promise<MessageResponse> {
  try {
    const response = await axios.delete(
      `${PROFILES_URL}/my-profile/language/${languageId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    throw new BackendError(error);
  }
}
