import { BACKEND_V1_URL } from "app/config";
import { BackendError } from "app/exceptions";
import axios from "axios";
import { Experience, Profile, Skill } from "core/profiles/types";
import { User } from "core/users/types";

const URL = `${BACKEND_V1_URL}/profiles`;

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
  body: UpdateProfileBody
): Promise<OneProfileResponse> {
  try {
    const response = await axios.patch(`${URL}/my-profile`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new BackendError(error);
  }
}

export async function addProfileSkill(
  token: string,
  body: UpdateProfileSkillBody
): Promise<Profile> {
  try {
    const response = await axios.post(`${URL}/my-profile/add-skill`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new BackendError(error);
  }
}

export async function removeProfileSkill(
  token: string,
  skillId: number
): Promise<Profile> {
  try {
    const response = await axios.post(
      URL + "/my-profile/remove-skill",
      { skillId },
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

export interface UpdateProfileBody {
  name: string;
  description: string;
}
export interface UpdateProfileSkillBody {
  skillId: number;
}

export interface OneProfileResponse {
  id: number;
  userId: number;
  user: User;
  description: string;
  skills: Skill[];
  experience: Experience[];
}
