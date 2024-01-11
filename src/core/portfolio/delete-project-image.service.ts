import axios from "axios";
import { MessageResponse, PORTFOLIO_URL } from "./config";
import { BackendError } from "app/exceptions";

export async function deleteAProjectImage(
  token: string,
  projectId: number,
  imgIndex: number
): Promise<MessageResponse> {
  try {
    const response = await axios.delete(
      `${PORTFOLIO_URL}/image/${projectId}/${imgIndex}`,
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

export interface UpdateProfileNewSkillBody {
  name: string;
}
