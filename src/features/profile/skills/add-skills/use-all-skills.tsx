import { getAllSkills } from "../../services/skills.service";
import { Skill } from "core/profiles/types";
import { useAuthState } from "hooks/use-auth-state";
import { useCallback, useEffect, useState } from "react";

const useAllSkills = () => {
  const [allSkills, setAllSkills] = useState<Skill[] | null>(null);
  const { token } = useAuthState();
  const getSkills = useCallback(async () => {
    try {
      if (!token) return;
      const data = await getAllSkills(token);
      setAllSkills(data);
    } catch (error) {
      console.log(error);
    }
  }, [token]);

  useEffect(() => {
    getSkills();
  }, [getSkills]);

  return allSkills;
};

export default useAllSkills;
