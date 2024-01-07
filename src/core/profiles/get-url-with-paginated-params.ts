import { CatalogueSearchParams } from "features/catalogue/catalogue-content/use-initial-catalogue-search-params";

export default function getUrlWithPaginatedParams(
  urlBase: string,
  currentPaginatedParams: CatalogueSearchParams,
  limit: number,
  currentSeed: number | null
): string {
  const { searchText, page, selectedSkills, selectedLanguagues } =
    currentPaginatedParams;
  const searchTextComplement = searchText ? `&searchText=${searchText}` : "";
  const skillsComplement = getSkillsComplement(selectedSkills);
  const languagesComplement = getLanguaguesComplement(selectedLanguagues);
  const seedComplement = currentSeed ? `&random=${currentSeed}` : "";
  return `${urlBase}?page=${page}&limit=${limit}
          ${searchTextComplement}
          ${skillsComplement}
          ${languagesComplement}
          ${seedComplement}`;
}

function getSkillsComplement(selectedSkills: string[]): string {
  if (!selectedSkills || !selectedSkills.length) return "";
  const selectedSkillsComplement = selectedSkills.join(",");
  return `&skills=${selectedSkillsComplement}`;
}

function getLanguaguesComplement(selectedLanguagues: string[]): string {
  if (!selectedLanguagues || !selectedLanguagues.length) return "";
  const selectedLanguaguesComplement = selectedLanguagues.join(",");
  return `&languages=${selectedLanguaguesComplement}`;
}
