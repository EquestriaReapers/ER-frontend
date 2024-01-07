import { Option } from "components/autocomplete-field/autocomplete-field.component";
import useAllLanguages from "core/languagues/use-all-language";

const LIMIT_SHOW_SELECT = 500;

const useLanguaguesSuggestions = (
  name: string | null,
  excludeLanguagues: string[]
): Option[] => {
  const allLanguagues = useAllLanguages(name || "", excludeLanguagues);
  if (!allLanguagues?.length) return [];

  const allSkilsWithoutExcluded = allLanguagues.filter((item) => {
    return !excludeLanguagues.includes(item.name);
  });

  const allSkilsWithoutExcludedFormatted = allSkilsWithoutExcluded.map(
    (item) => {
      return { value: item.id, label: item.name };
    }
  );

  return allSkilsWithoutExcludedFormatted.slice(0, LIMIT_SHOW_SELECT);
};

export default useLanguaguesSuggestions;
