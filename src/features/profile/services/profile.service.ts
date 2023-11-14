import { BACKEND_V1_URL } from "app/config";
import { BackendError } from "app/exceptions";
import axios from "axios";
import { User } from "core/users/types";

const URL = `${BACKEND_V1_URL}/profiles`;

export async function fetchOneProfile(token: string | null, profile_id: number): Promise<OneProfileResponse> {
  try {
    const response = await axios.get(URL + "/" + profile_id, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
  } catch (error) {
    throw new BackendError(error);
  }
}

export function updateProfile(body: JSON, profile_id: number) {
  try {
    const res = axios.patch(
      "http://localhost:3000/api/v1/profiles/" + profile_id,
      body
    );
    return res;
  } catch (error) {
    console.log("Hay un error");
  }
}

export interface OneProfileResponse {
  userId: number;
  description: string;
  image: string;
  user: User;
}
