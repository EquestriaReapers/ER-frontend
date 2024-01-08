import { CatalogueSearchParams } from "features/catalogue/catalogue-content/use-initial-catalogue-search-params";

export default function getUrlWithPaginatedParams(
  urlBase: string,
  currentPaginatedParams: CatalogueSearchParams,
  limit: number,
  currentSeed: number | null
): string {
  const { searchText, page, isExclusiveLanguague, isExclusiveSkills } =
    currentPaginatedParams;
  const searchTextComplement = searchText ? `&searchText=${searchText}` : "";
  const isExclusiveSkillsComplement = isExclusiveSkills
    ? "&isExclusiveSkills=true"
    : "&isExclusiveSkills=false";
  const isExclusiveLanguagueComplement = isExclusiveLanguague
    ? "&isExclusiveLanguages=true"
    : "&isExclusiveLanguages=false";

  const seedComplement = currentSeed ? `&random=${currentSeed}` : "";
  const url = `${urlBase}?page=${page}&limit=${limit}${searchTextComplement}${seedComplement}${isExclusiveSkillsComplement}${isExclusiveLanguagueComplement}`;

  return url;
}

/*
export interface CatalogueSearchParams {
  searchText: string;
  page: number;
  // Selector exclusivo / inclusivo de habilidades
  selectedSkills: string[];
  isExclusiveSkills: boolean;
  // Selector exclusivo / inclusivo de idiomas
  selectedLanguagues: string[];
  isExclusiveLanguague: boolean;
  // Otros selectores siempre inclusivos
  selectedLocations: string[];
  selectedCareers: string[];
}

*/
