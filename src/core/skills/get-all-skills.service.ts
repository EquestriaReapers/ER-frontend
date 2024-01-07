import { SKILLS_URL } from "./config";
import { Skill } from "core/profiles/types";
import axios from "axios";
import { BackendError } from "app/exceptions";
import { SkillType } from "core/skills/types";

const LIMIT_DEFAULT_GET_ALL_SKILLS = 25;

export async function getAllSkills(
  name: string,
  exclude?: string[],
  type?: SkillType
): Promise<Skill[]> {
  try {
    const allSkillsUrlFormatted = getSkillsUrl(name, exclude, type);
    //console.log("==============", allSkillsUrlFormatted);
    const response = await axios.get(allSkillsUrlFormatted);
    return response.data;
  } catch (error) {
    throw new BackendError(error);
  }
}

function getSkillsUrl(
  name: string,
  exclude?: string[],
  type?: SkillType
): string {
  const skillsTypeComplement =
    type !== undefined && type ? `&type=${type}` : "";
  const excludeComplement =
    exclude !== undefined && exclude && exclude.length
      ? `&exclude=${exclude}`
      : "";
  return `${SKILLS_URL}?name=${name}&limit=${LIMIT_DEFAULT_GET_ALL_SKILLS}
          ${skillsTypeComplement}
          ${excludeComplement}`;
}
