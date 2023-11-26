import { BACKEND_V1_URL } from "app/config";
import { BackendError } from "app/exceptions";
import axios from "axios";
import { Experience } from "core/profiles/types";  

const URL = `${BACKEND_V1_URL}/experience`;  

export async function getAllExperiences(token: string): Promise<Experience[]> {
  try {
    const response = await axios.get(URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new BackendError(error);
  }
}