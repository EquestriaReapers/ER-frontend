import { Language } from "core/profiles/types";
import { LANGUAGE_URL } from "./config";
import axios from "axios";
import { BackendError } from "app/exceptions";

export async function getAllLanguages(
  token: string,
  name: string
): Promise<Language[]> {
  try {
    const response = await axios.get(`${LANGUAGE_URL}?name=${name}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new BackendError(error);
  }
}
