import axios from "axios";

// Own
import { BackendError } from "app/exceptions";
import { EXPERIENCE_URL, MessageResponse } from "./types";

export async function updateCVExperience(
  body: UpdateExperienceBody,
  token: string,
  experienceId: number
): Promise<MessageResponse> {
  try {
    const response = await axios.patch(
      `${EXPERIENCE_URL}/my-experience/${experienceId}`,
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

export interface UpdateExperienceBody {
  isVisible: boolean;
}
