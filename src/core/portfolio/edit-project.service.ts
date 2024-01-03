import axios from "axios";
import { MessageResponse, PORTFOLIO_URL } from "./config";
import { BackendError } from "app/exceptions";

export async function updateProfileProject(
  token: string,
  projectId: number,
  body: UpdateProjectBody
): Promise<MessageResponse> {
  try {
    const response = await axios.patch(`${PORTFOLIO_URL}/${projectId}`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new BackendError(error);
  }
}

export interface UpdateProjectBody {
  title: string;
  description: string;
  location: string;
  dateEnd: string;
  imagePrincipal: File | null;
  image: File[] | null;
}

export interface UpdateProfileNewSkillBody {
  name: string;
}
