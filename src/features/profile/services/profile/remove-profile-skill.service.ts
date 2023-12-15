import { PROFILES_URL } from "./config/config";
import { MessageResponse } from "./config/config";
import axios from "axios";
import { BackendError } from "app/exceptions";

export async function removeProfileSkill(
  token: string,
  skillId: number
): Promise<MessageResponse> {
  try {
    const response = await axios.delete(
      `${PROFILES_URL}/my-profile/skill/${skillId}`,
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
