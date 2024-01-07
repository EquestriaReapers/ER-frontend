import axios from "axios";
import { BackendError } from "../../app/exceptions";
import { SKILLSCV_URL } from "./config";

export async function updateCvSkills(
  body: UpdateSkillsBody,
  token: string,
  Id: number
): Promise<unknown> {
  try {
    const response = await axios.patch(
      `${SKILLSCV_URL}/${Id}/visibility`,
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

export interface UpdateSkillsBody {
  isVisible: boolean;
}
