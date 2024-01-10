import { Skill } from "core/profiles/types";
import { updateCvSkills } from "core/skills/update-cv-skills.service";
import useProfileContext from "features/profile/profile-context/use-profile-context";
import { useAuthState } from "hooks/use-auth-state";
import { useErrorToast } from "hooks/use-error-toast";
import { useCallback } from "react";
import { useSkillsModalContext } from "../../skills-modal-context/use-skills-modal-context";

const useUpdateSkill = () => {
  const { token } = useAuthState();
  const { showErrorToast } = useErrorToast();
  const { fetchProfile } = useProfileContext();
  const { setLoading } = useSkillsModalContext();

  const onUpdateSkill = useCallback(
    async (skill: Skill, isVisible: boolean) => {
      try {
        setLoading(true);
        if (!token) return;
        await updateCvSkills(isVisible, token, skill.id);
        await fetchProfile();
      } catch (error) {
        showErrorToast(error);
      } finally {
        setLoading(false);
      }
    },
    [showErrorToast, token, fetchProfile, setLoading]
  );
  return onUpdateSkill;
};

export default useUpdateSkill;
