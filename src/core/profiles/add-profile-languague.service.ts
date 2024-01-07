import { PROFILES_URL } from "./config";
import axios from "axios";
import { MessageResponse } from "./config";
import { BackendError } from "app/exceptions";
import { LanguageLevel } from "./types";

export async function addProfileLanguague(
  token: string,
  body: AddProfileLanguague
): Promise<MessageResponse> {
  try {
    const response = await axios.post(
      `${PROFILES_URL}/my-profile/language`,
      body,
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

export interface AddProfileLanguague {
  languageId: number;
  level: LanguageLevel;
}
