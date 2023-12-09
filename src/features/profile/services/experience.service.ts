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

export async function editAProfileExperience(
  body: updateExperienceBody,
  token: string,
  experienceId: number
): Promise<MessageResponse> {
  try {
    const response = await axios.patch(
      `${URL}/my-experience/${experienceId}`,
      body,
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

export interface addExperienceBody {
  role: string;
  businessName: string;
  startDate: Date;
  location: string;
  description: string;
  endDate?: Date;
}

export interface updateExperienceBody {
  role: string;
  businessName: string;
  location: string;
  description: string;
}

export interface MessageResponse {
  message: string;
}
