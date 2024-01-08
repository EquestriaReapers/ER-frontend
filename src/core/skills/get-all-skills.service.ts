import { SKILLS_URL } from "./config";
import { Skill } from "core/profiles/types";
import axios from "axios";
import { BackendError } from "app/exceptions";
import { SkillType } from "core/skills/types";

const LIMIT_DEFAULT_GET_ALL_SKILLS = 25;

export async function getAllSkills(
  name: string,
  excludeName?: string[],
  type?: SkillType
): Promise<Skill[]> {
  try {
    const allSkillsUrlFormatted = getUrl(name, excludeName, type);
    console.log("allSkillsUrlFormatted", allSkillsUrlFormatted);
    const response = await axios.get(allSkillsUrlFormatted);
    return response.data;
  } catch (error) {
    throw new BackendError(error);
  }
}

function getUrl(
  name: string,
  excludeName?: string[],
  type?: SkillType
): string {
  const skillsTypeComplement =
    type !== undefined && type ? `&type=${type}` : "";
  const excludeComplement =
    excludeName !== undefined && excludeName && excludeName.length
      ? getExcludeArrayParams(excludeName)
      : "";
  return `${SKILLS_URL}?name=${name}&limit=${LIMIT_DEFAULT_GET_ALL_SKILLS}${skillsTypeComplement}${excludeComplement}`;
}

// input: ["a", "b", "c"] => output: "&exclude=a&exclude=b&exclude=c"
function getExcludeArrayParams(exclude: string[]): string {
  return exclude.reduce((acc, item) => {
    return `${acc}&exclude=${item}`;
  }, "");
}
