import { SKILLS_URL } from "./config";
import { Skill } from "core/profiles/types";
import axios from "axios";
import { BackendError } from "app/exceptions";
import { SkillType } from "core/skills/types";

export async function getAllSkills(
  token: string,
  name: string,
  type: SkillType
): Promise<Skill[]> {
  try {
    const response = await axios.get(
      `${SKILLS_URL}?name=${name}&type=${type}`,
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
