import { updateCvSkills } from "core/skills/update-cv-skills.service";
import { useAuthState } from "hooks/use-auth-state";
import { useErrorToast } from "hooks/use-error-toast";
import { useCallback } from "react";
import { useNavigate } from "react-router";
import useProfileContext from "features/profile/profile-context/use-profile-context";

const UseUpdateSkillsCV = () => {
  const getToken = useGetToken();
  const { showErrorToast } = useErrorToast();
  const { fetchProfile } = useProfileContext();
  const token = getToken();

  return useCallback(
    async (isVisible: boolean, skillId: number) => {
      try {
        const data = await updateCvSkills(isVisible, token, skillId);
        await fetchProfile();
        return data;
      } catch (error) {
        showErrorToast(error);
      }
    },
    [fetchProfile, showErrorToast, token]
  );
};

function useGetToken() {
  const navigate = useNavigate();
  const { token } = useAuthState();
  console.log(token);
  return useCallback(() => {
    if (!token) {
      navigate("/login");
      throw new Error(
        "No se ha encontrado un token local para hacer la peticion"
      );
    }

    return token;
  }, [navigate, token]);
}

export default UseUpdateSkillsCV;
