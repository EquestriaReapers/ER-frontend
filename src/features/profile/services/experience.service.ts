import { BACKEND_V1_URL } from "app/config";
import { BackendError } from "app/exceptions";
import axios from "axios";
import { Experience, Profile } from "core/profiles/types";  

const URL = `${BACKEND_V1_URL}/profiles/1`;  

export async function getAllExperiences(token: string): Promise<Profile> {
  try {
    const response = await axios.get(URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);

    return response.data;

  } catch (error) {
    throw new BackendError(error);
  }
}