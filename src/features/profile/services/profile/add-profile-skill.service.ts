import { PROFILES_URL } from "./config";
import axios from "axios";
import { MessageResponse } from "./config";
import { BackendError } from "app/exceptions";
import { BACKEND_V1_URL } from "app/config";

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

export async function addProfileNewSkill(
  token: string,
  body: UpdateProfileNewSkillBody
): Promise<MessageResponse> {
  try {
    const response = await axios.post(
      `${BACKEND_V1_URL}/skills/skill-user`,
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

export interface UpdateProfileNewSkillBody {
  name: string;
}
