import { BackendError } from "app/exceptions";
import { getAllSkills } from "../../services/skills.service";
import { Skill } from "core/profiles/types";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";

const useAllSkills = (token: string) => {
  const [allSkills, setAllSkills] = useState<Skill[] | null>(null);

  const getSkills = useCallback(async () => {
    try {
      if (!token) return;
      const data = await getAllSkills(token);
      setAllSkills(data);
    } catch (error) {
      if (error instanceof BackendError) {
        toast.error(error.message);
      } else {
        toast.error("Error desconocido");
      }
    }
  }, [token]);

  useEffect(() => {
    getSkills();
  }, [getSkills]);

  return { allSkills };
};

export default useAllSkills;
