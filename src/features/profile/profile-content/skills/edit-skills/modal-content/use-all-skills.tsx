import { Skill } from "core/profiles/types";
import { getAllSkills } from "features/profile/services/skills/get-all-skills.service";
import { useAuthState } from "hooks/use-auth-state";
import { useErrorToast } from "hooks/use-error-toast";
import { useCallback, useEffect, useState } from "react";

const useAllSkills = () => {
  const [allSkills, setAllSkills] = useState<Skill[] | null>(null);
  const { showErrorToast } = useErrorToast();
  const { token } = useAuthState();
  const getSkills = useCallback(async () => {
    try {
      if (!token) return;
      const data = await getAllSkills(token);
      setAllSkills(data);
    } catch (error) {
      showErrorToast(error);
    }
  }, [token, showErrorToast]);

  useEffect(() => {
    getSkills();
  }, [getSkills]);

  return allSkills;
};

export default useAllSkills;
