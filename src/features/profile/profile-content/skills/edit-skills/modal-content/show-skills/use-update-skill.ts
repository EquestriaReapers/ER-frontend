import { Skill } from "core/profiles/types";
import { updateCvSkills } from "core/skills/update-cv-skills.service";
import useProfileContext from "features/profile/profile-context/use-profile-context";
import { useAuthState } from "hooks/use-auth-state";
import { useErrorToast } from "hooks/use-error-toast";
import { useCallback } from "react";

const useUpdateSkill = () => {
  const { token } = useAuthState();
  const { showErrorToast } = useErrorToast();
  const { fetchProfile } = useProfileContext();
  const onUpdateSkill = useCallback(
    async (skill: Skill, isVisible: boolean) => {
      try {
        console.log("entro");
        if (!token) return;
        console.log(isVisible, token, skill.id);
        const data = await updateCvSkills(isVisible, token, skill.id);
        console.log(data);
        await fetchProfile();
        return data;
      } catch (error) {
        showErrorToast(error);
      }
    },
    [showErrorToast, token, fetchProfile]
  );
  return onUpdateSkill;
};

export default useUpdateSkill;
