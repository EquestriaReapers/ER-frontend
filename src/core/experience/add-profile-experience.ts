import axios from "axios";

// Own
import { BackendError } from "app/exceptions";
import { EXPERIENCE_URL, MessageResponse } from "./types";

export async function addAProfileExperience(
  body: AddExperienceBody,
  token: string
): Promise<MessageResponse> {
  try {
    const response = await axios.post(
      `${EXPERIENCE_URL}/my-experience`,
      {
        role: body.role,
        businessName: body.businessName,
        startDate: body.startDate,
        location: body.location,
        description: body.description,
        endDate: body.endDate,
      },
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

export interface AddExperienceBody {
  role: string;
  businessName: string;
  startDate: string;
  location: string;
  description: string;
  endDate: string | null;
}
