import useProfileContext from "features/profile/profile-context/use-profile-context";
import { addProfileNewSkill } from "core/profiles/add-profile-skill.service";
import { useAuthState } from "hooks/use-auth-state";
import { useErrorToast } from "hooks/use-error-toast";
import { useCallback } from "react";
import { useSkillsModalContext } from "../../skills-modal-context/use-skills-modal-context";

const useAddUnexistsSkill = () => {
  const { setLoading, skillType } = useSkillsModalContext();
  const { fetchProfile } = useProfileContext();
  const { token } = useAuthState();
  const { showErrorToast } = useErrorToast();

  return useCallback(
    async (name: string) => {
      try {
        if (!token) return;
        setLoading(true);
        const data = await addProfileNewSkill(token, { name, type: skillType });
        fetchProfile();
        return data;
      } catch (error) {
        showErrorToast(error);
      } finally {
        setLoading(false);
      }
    },
    [fetchProfile, setLoading, showErrorToast, token, skillType]
  );
};

export default useAddUnexistsSkill;
