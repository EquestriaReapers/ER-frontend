import axios from "axios";

// Own
import { BackendError } from "app/exceptions";
import { EDUCATION_URL, MessageResponse } from "./types";

export async function deleteAProfileEducation(
  token: string,
  educationId: number
): Promise<MessageResponse> {
  try {
    const response = await axios.delete(
      `${EDUCATION_URL}/my-EDUCATION/${educationId}`,
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
