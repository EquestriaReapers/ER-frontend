import axios from "axios";
import { MessageResponse, PORTFOLIO_URL } from "./config";
import { BackendError } from "app/exceptions";

export async function addProjectToProfile(
  token: string,
  body: AddProjectBody
): Promise<MessageResponse> {
  try {
    console.log(body);
    const response = await axios.post(`${PORTFOLIO_URL}`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new BackendError(error);
  }
}

export interface AddProjectBody {
  title: string;
  description: string;
  location: string;
  dateEnd: string;
  imagePrincipal: string;
  images: string[];
}

export interface UpdateProfileNewSkillBody {
  name: string;
}
