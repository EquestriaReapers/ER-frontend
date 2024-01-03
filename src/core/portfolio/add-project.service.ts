import axios from "axios";
import { MessageResponse, PORTFOLIO_URL } from "./config";
import { BackendError } from "app/exceptions";

export async function addProjectToProfile(
  token: string,
  body: AddProjectBody
): Promise<MessageResponse> {
  try {
    const formData = new FormData();

    formData.append("title", body.title);
    formData.append("description", body.description);
    formData.append("location", body.location);
    formData.append("dateEnd", body.dateEnd);
    body.image.forEach((file) => {
      formData.append(`image`, file);
    });
    console.log(formData);
    const response = await axios.post(`${PORTFOLIO_URL}`, formData, {
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
  image: File[];
}

export interface UpdateProfileNewSkillBody {
  name: string;
}
