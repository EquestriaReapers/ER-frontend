import { Skill } from "core/profiles/types";
import { getAllSkills } from "core/skills/get-all-skills.service";
import { useAuthState } from "hooks/use-auth-state";
import { useErrorToast } from "hooks/use-error-toast";
import { useCallback, useEffect, useState } from "react";
import { useSkillsModalContext } from "../../skills-modal-context/use-skills-modal-context";

const useAllSkills = (name: string) => {
  const [allSkills, setAllSkills] = useState<Skill[] | null>(null);
  const { showErrorToast } = useErrorToast();
  const { token } = useAuthState();
  const { skillType } = useSkillsModalContext();

  const getSkills = useCallback(async () => {
    try {
      if (!name) {
        setAllSkills([]);
        return;
      }
      if (!token) return;
      const data = await getAllSkills(token, name, skillType);
      setAllSkills(data);
    } catch (error) {
      showErrorToast(error);
    }
  }, [name, token, skillType, showErrorToast]);

  useEffect(() => {
    getSkills();
  }, [getSkills]);

  return allSkills;
};

export default useAllSkills;
