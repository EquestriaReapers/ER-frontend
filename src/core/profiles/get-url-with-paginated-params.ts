import { CatalogueSearchParams } from "features/catalogue/catalogue-content/use-initial-catalogue-search-params";

export default function getUrlWithPaginatedParams(
  urlBase: string,
  currentPaginatedParams: CatalogueSearchParams,
  limit: number,
  currentSeed: number | null
): string {
  const {
    searchText,
    page,
    selectedSkills,
    selectedLanguagues,
    selectedLocations,
    selectedCareers,
    isExclusiveLanguague,
    isExclusiveSkills,
  } = currentPaginatedParams;
  const searchTextComplement = searchText ? `&searchText=${searchText}` : "";
  const skillsComplement = getSkillsComplement(selectedSkills);
  const languagesComplement = getLanguaguesComplement(selectedLanguagues);
  const locationComplement = getLocationComplement(selectedLocations);
  const careerComplement = getCareerComplement(selectedCareers);
  const isExclusiveSkillsComplement = isExclusiveSkills
    ? "&isExclusiveSkills=true"
    : "&isExclusiveSkills=false";
  const isExclusiveLanguagueComplement = isExclusiveLanguague
    ? "&isExclusiveLanguague=true"
    : "&isExclusiveLanguague=false";

  const seedComplement = currentSeed ? `&random=${currentSeed}` : "";
  const url = `${urlBase}?page=${page}&limit=${limit}${searchTextComplement}${skillsComplement}${languagesComplement}${seedComplement}${locationComplement}${careerComplement}${isExclusiveSkillsComplement}${isExclusiveLanguagueComplement}`;

  return url;
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

function getLocationComplement(selectedLocations: string[]): string {
  if (!selectedLocations || !selectedLocations.length) return "";
  const selectedLocationsComplement = selectedLocations.join(",");
  return `&locations=${selectedLocationsComplement}`;
}

function getCareerComplement(selectedCareers: string[]): string {
  if (!selectedCareers || !selectedCareers.length) return "";
  const selectedCareersComplement = selectedCareers.join(",");
  return `&careers=${selectedCareersComplement}`;
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
