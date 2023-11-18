import { BACKEND_V2_URL } from "app/config";
import { BackendError } from "app/exceptions";
import axios from "axios";
import { Skill } from "core/profiles/types";

const URL = `${BACKEND_V2_URL}/skills`;

export async function getAllSkills(
  token: string
): Promise<GetAllSkillsResponse> {
  try {
    const response = await axios.get(URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new BackendError(error);
  }
}

export interface GetAllSkillsResponse {
  skills: Skill[]
}
