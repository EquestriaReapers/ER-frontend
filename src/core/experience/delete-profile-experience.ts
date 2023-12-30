import axios from "axios";

// Own
import { BackendError } from "app/exceptions";
import { EXPERIENCE_URL, MessageResponse } from "./types";

export async function deleteAProfileExperience(
  token: string,
  experienceId: number
): Promise<MessageResponse> {
  try {
    const response = await axios.delete(
      `${EXPERIENCE_URL}/my-experience/${experienceId}`,
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
