import { getAllSkills } from "../../services/skills.service";
import { Skill } from "core/profiles/types";
import { useCallback, useEffect, useState } from "react";

const useAllSkills = (token: string) => {
  const [allSkills, setAllSkills] = useState<Skill[] | null>(null);

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

  return { allSkills };
};

export default useAllSkills;
