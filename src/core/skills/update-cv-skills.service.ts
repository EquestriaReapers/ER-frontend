import axios from "axios";
import { BackendError } from "../../app/exceptions";
import { SKILLSCV_URL } from "./config";
import { MessageResponse } from "core/profiles/config";

export async function updateCvSkills(
  isVisible: boolean,
  token: string,
  skillId: number
): Promise<MessageResponse> {
  try {
    const response = await axios.patch(
      `${SKILLSCV_URL}/${skillId}/visibility`,
      { isVisible },
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

export interface UpdateSkillsBody {
  isVisible: boolean;
}
