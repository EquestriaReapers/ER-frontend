import { Option } from "components/autocomplete-field/autocomplete-field.component";
import useAllLocations from "core/locations/use-all-locations";

const LIMIT_SHOW_SELECT = 500;

const useLocationsSuggestions = (
  name: string | null,
  excludeLocations: string[]
): Option[] => {
  const allLocations = useAllLocations(name || "", excludeLocations);
  if (!allLocations?.length) return [];

  const allLocationsWithoutExcluded = allLocations.filter((item) => {
    return !excludeLocations.includes(item.name);
  });

  const allLocationsWithoutExcludedFormatted = allLocationsWithoutExcluded.map(
    (item) => {
      return { value: item.id, label: item.name };
    }
  );

  return allLocationsWithoutExcludedFormatted.slice(0, LIMIT_SHOW_SELECT);
};

export default useLocationsSuggestions;
