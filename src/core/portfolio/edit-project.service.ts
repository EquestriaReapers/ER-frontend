import axios from "axios";
import { MessageResponse, PORTFOLIO_URL } from "./config";
import { BackendError } from "app/exceptions";

export async function updateProfileProject(
  token: string,
  projectId: number,
  body: UpdateProjectBody
): Promise<MessageResponse> {
  try {
    const formData = new FormData();
    if (body.title) formData.append("title", body.title);
    if (body.description) formData.append("description", body.description);
    if (body.location) formData.append("location", body.location);
    if (body.dateEnd) formData.append("dateEnd", body.dateEnd);
    if (body.imagePrincipal)
      formData.append("imagePrincipal", body.imagePrincipal as File);

    if (body.image) {
      body.image?.forEach((file) => {
        if (file instanceof File) formData.append(`image`, file);
      });
    }
    console.log(formData);
    const response = await axios.patch(
      `${PORTFOLIO_URL}/${projectId}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new BackendError(error);
  }
}

export interface UpdateProjectBody {
  title?: string;
  description?: string;
  location?: string;
  dateEnd?: string;
  imagePrincipal?: File | null;
  image?: File[] | null;
}

export interface UpdateProfileNewSkillBody {
  name: string;
}
