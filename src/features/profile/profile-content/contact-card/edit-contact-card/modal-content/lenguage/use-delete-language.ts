import { useCallback } from "react";

// Own
import { removeProfileSkill } from "core/profiles/remove-profile-skill.service";
import { useAuthState } from "hooks/use-auth-state";
import { useErrorToast } from "hooks/use-error-toast";
import { useSuccessToast } from "hooks/use-success-toast";
import useProfileContext from "features/profile/profile-context/use-profile-context";
import useContactCardContext from "../../contact-card-context/use-contact-card-context";
import { useNavigate } from "react-router-dom";

const useDeleteSkill = () => {
  const { setLoading } = useContactCardContext();
  const { fetchProfile } = useProfileContext();
  const { showErrorToast } = useErrorToast();
  const { showSuccessToast } = useSuccessToast();
  const getToken = useGetToken();

  const deleteSkill = useCallback(
    async (languagueId: number) => {
      try {
        const token = getToken();
        setLoading(true);
        const data = await removeProfileSkill(token, languagueId);
        showSuccessToast(data.message);
        await fetchProfile();
        return;
      } catch (error) {
        showErrorToast(error);
      } finally {
        setLoading(false);
      }
    },
    [getToken, setLoading, showSuccessToast, fetchProfile, showErrorToast]
  );

  return deleteSkill;
};

function useGetToken() {
  const navigate = useNavigate();
  const { token } = useAuthState();

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

export default useDeleteSkill;
