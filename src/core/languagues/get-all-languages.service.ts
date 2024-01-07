import { Language } from "core/profiles/types";
import { LANGUAGE_URL } from "../contact-method/config";
import axios from "axios";
import { BackendError } from "app/exceptions";

export async function getAllLanguages(
  name: string,
  excludeNames?: string[]
): Promise<Language[]> {
  try {
    const skillUrl = getUrl(name, excludeNames);
    const response = await axios.get(skillUrl);
    return response.data;
  } catch (error) {
    throw new BackendError(error);
  }
}

function getUrl(name: string, exclude?: string[]): string {
  const excludeComplement =
    exclude !== undefined && exclude && exclude.length
      ? getExcludeArrayParams(exclude)
      : "";
  return `${LANGUAGE_URL}?name=${name}${excludeComplement}`;
}

// input: ["a", "b", "c"] => output: "&exclude=a&exclude=b&exclude=c"
function getExcludeArrayParams(exclude: string[]): string {
  return exclude.reduce((acc, item) => {
    return `${acc}&exclude=${item}`;
  }, "");
}
