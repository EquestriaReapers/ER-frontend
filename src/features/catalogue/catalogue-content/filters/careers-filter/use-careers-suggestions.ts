import { Option } from "components/autocomplete-field/autocomplete-field.component";
import { CareersOption } from "core/profiles/get-careers-options.service";

const useCareersSuggestions = (
  _: string | null,
  excludeCareersSlug: string[],
  allCareers: CareersOption[]
): Option[] => {
  if (!allCareers?.length) return [];

  const allCareersWtihoutExcludes = allCareers.filter((item) => {
    return !excludeCareersSlug.includes(item.value);
  });

  const allCareersWtihoutExcludesFormatted = allCareersWtihoutExcludes.map(
    (item) => {
      return { value: item.value, label: item.label };
    }
  );

  return allCareersWtihoutExcludesFormatted;
};

export default useCareersSuggestions;
