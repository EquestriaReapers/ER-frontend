import { PROFILES_URL } from "./config/config";
import axios from "axios";
import { Profile } from "core/profiles/types";
import { BackendError } from "app/exceptions";

export async function fetchOneProfile(
  token: string,
  profileId: number
): Promise<Profile> {
  try {
    const response = await axios.get(`${PROFILES_URL}/${profileId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new BackendError(error);
  }
}