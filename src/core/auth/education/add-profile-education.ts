import axios from "axios";

// Own
import { BackendError } from "app/exceptions";
import { EDUCATION_URL, MessageResponse } from "./types";

export async function addAProfileEducation(
  body: AddEducationBody,
  token: string
): Promise<MessageResponse> {
  try {
    const response = await axios.post(`${EDUCATION_URL}/my-education`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new BackendError(error);
  }
}

export interface AddEducationBody {
  title: string;
  entity: string;
  endDate: string 
}
