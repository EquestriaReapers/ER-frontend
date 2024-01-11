import axios from "axios";
import { MessageResponse, PORTFOLIO_URL } from "./config";
import { BackendError } from "app/exceptions";

export async function deleteAProfileProject(
  token: string,
  projectId: number
): Promise<MessageResponse> {
  try {
    const response = await axios.delete(`${PORTFOLIO_URL}/${projectId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new BackendError(error);
  }
}

export interface UpdateProfileNewSkillBody {
  name: string;
}
