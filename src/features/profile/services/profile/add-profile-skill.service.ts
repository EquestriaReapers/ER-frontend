import { PROFILES_URL } from "./config/config";
import axios from "axios";
import { MessageResponse } from "./config/config";
import { BackendError } from "app/exceptions";

export async function addProfileSkill(
  token: string,
  body: UpdateProfileSkillBody
): Promise<MessageResponse> {
  try {
    const response = await axios.post(
      `${PROFILES_URL}/my-profile/skill`,
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

export interface UpdateProfileSkillBody {
  skillId: number;
}
