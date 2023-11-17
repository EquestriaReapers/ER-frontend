import { BACKEND_V2_URL } from "app/config";
import { BackendError } from "app/exceptions";
import axios from "axios";
import { Skill } from "core/profiles/types";

const URL = `${BACKEND_V2_URL}/profiles`;

export async function fetchOneProfile(
  token: string,
  profile_id: number
): Promise<OneProfileResponse> {
  try {
    const response = await axios.get(URL + "/" + profile_id, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new BackendError(error);
  }
}

export async function updateProfile(
  token: string,
  body: updateProfileBody,
  profileId: number
) {
  try {
    const response = await axios.patch(URL + "/" + profileId, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new BackendError(error);
  }
}

export async function updateProfileSkill(
  token: string,
  body: updateProfileSkillBody,
  profileId: number
) {
  try {
    const response = await axios.patch(URL + "/" + profileId, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new BackendError(error);
  }
}

export interface updateProfileBody {
  name: string;
  description: string;
}
export interface updateProfileSkillBody {
  userId: number;
  name: string
}

export interface OneProfileResponse {
  id: number;
  userId: number;
  description: string;
  user: {
    email: string;
    name: string;
  };
  skills: Skill[];
}
