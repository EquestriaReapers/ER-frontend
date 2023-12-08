import { BACKEND_V1_URL } from "app/config";
import { BackendError } from "app/exceptions";
import axios from "axios";
import { Profile } from "core/profiles/types";

const URL = `${BACKEND_V1_URL}/profiles`;

export async function fetchOneProfile(
  token: string,
  profileId: number
): Promise<Profile> {
  try {
    const response = await axios.get(`${URL}/${profileId}`, {
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
): Promise<MessageResponse> {
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
): Promise<MessageResponse> {
  try {
    const response = await axios.post(`${URL}/my-profile/skill`, body, {
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
): Promise<MessageResponse> {
  try {
    const response = await axios.delete(`${URL}/my-profile/${skillId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    throw new BackendError(error);
  }
}

export interface UpdateProfileBody {
  description: string;
  mainTitle: string;
  countryResidence: string;
  name: string;
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

export interface UpdateProfileSkillBody {
  skillId: number;
}
