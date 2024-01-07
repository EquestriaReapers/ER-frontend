import { Skill } from "core/profiles/types";
import { getAllSkills } from "core/skills/get-all-skills.service";
import { useErrorToast } from "hooks/use-error-toast";
import { useCallback, useEffect, useState } from "react";
import { Option } from "components/autocomplete-field/autocomplete-field.component";

const useAllSkills = (name: string, excludeSkills: string[]) => {
  const [allSkills, setAllSkills] = useState<Skill[] | null>(null);
  const { showErrorToast } = useErrorToast();

  const getSkills = useCallback(async () => {
    try {
      if (!name) {
        setAllSkills([]);
        return;
      }
      const data = await getAllSkills(name, excludeSkills);
      setAllSkills(data);
    } catch (error) {
      showErrorToast(error);
    }
  }, [excludeSkills, name, showErrorToast]);

  useEffect(() => {
    getSkills();
  }, [getSkills]);

  return allSkills;
};

const useSkillsSuggestions = (
  name: string | null,
  excludeSkills: string[]
): Option[] => {
  const allSkills = useAllSkills(name || "", excludeSkills);
  if (!allSkills?.length) return [];

  const allSkilsWithoutExcluded = allSkills.filter((item) => {
    return !excludeSkills.includes(item.name);
  });

  return allSkilsWithoutExcluded.map((item) => {
    return { value: item.id, label: item.name };
  });
};

export default useSkillsSuggestions;
