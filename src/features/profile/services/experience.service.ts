import { BACKEND_V1_URL } from "app/config";
import { BackendError } from "app/exceptions";
import axios from "axios";
const URL = `${BACKEND_V1_URL}/experience`;

export async function addAProfileExperience(
  body: addExperienceBody,
  token: string
): Promise<MessageResponse> {
  try {
    const response = await axios.post(`${URL}/my-experience`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new BackendError(error);
  }
}

export interface addExperienceBody {
  role: string;
  businessName: string;
  profileId: number;
  startDate: Date;
  location: string;
  description: string;
  endDate: Date | null;
}

export interface MessageResponse {
  message: string;
}
