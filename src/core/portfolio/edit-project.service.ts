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
    if (body.url) formData.append("url", body.url);
    if (body.imagePrincipal)
      formData.append("imagePrincipal", body.imagePrincipal as File);

    if (body.image) {
      body.image?.forEach((file) => {
        if (file instanceof File) formData.append(`image`, file);
      });
    }
    const response = await axios.patch(
      `${PORTFOLIO_URL}/${projectId}`,
      formData,
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

export interface UpdateProjectBody {
  title?: string;
  description?: string;
  location?: string;
  dateEnd?: string;
  imagePrincipal?: File | null;
  image?: File[] | null;
  url?: string | null;
}

export interface UpdateProfileNewSkillBody {
  name: string;
}
