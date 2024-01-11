import { useSearchParams } from "react-router-dom";

export default function useInitialPortfolioSearchParams(): PortfolioSearchParams {
  const [searchParams] = useSearchParams();
  const paramsPage = searchParams.get("page");
  const paramsSearchText = searchParams.get("searchText");
  const paramsSelectedSkills = searchParams.get("selectedSkills");
  const paramsSelectedLanguagues = searchParams.get("selectedLanguagues");
  const paramsSelectedLocations = searchParams.get("selectedLocations");
  const paramsSelectedCareers = searchParams.get("selectedCareers");
  const paramsIsExclusiveSkills = searchParams.get("isExclusiveSkills");
  const paramsIsExclusiveLanguague = searchParams.get("isExclusiveLanguague");

  // Por defecto siempre son exclusivos

  const isExclusiveSkills =
    paramsIsExclusiveSkills === "" ||
    paramsIsExclusiveSkills === undefined ||
    paramsIsExclusiveSkills === null
      ? true
      : paramsIsExclusiveSkills === "true";

  const isExclusiveLanguague =
    paramsIsExclusiveLanguague === "" ||
    paramsIsExclusiveLanguague === undefined ||
    paramsIsExclusiveLanguague === null
      ? true
      : paramsIsExclusiveLanguague === "true";

  return {
    searchText: paramsSearchText || "",
    selectedSkills: paramsSelectedSkills ? paramsSelectedSkills.split(",") : [],
    page: paramsPage ? parseInt(paramsPage) : 1,
    selectedLanguagues: paramsSelectedLanguagues
      ? paramsSelectedLanguagues.split(",")
      : [],
    selectedLocations: paramsSelectedLocations
      ? paramsSelectedLocations.split(",")
      : [],
    selectedCareers: paramsSelectedCareers
      ? paramsSelectedCareers.split(",")
      : [],
    isExclusiveSkills,
    isExclusiveLanguague,
  };
}

export interface PortfolioSearchParams {
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
