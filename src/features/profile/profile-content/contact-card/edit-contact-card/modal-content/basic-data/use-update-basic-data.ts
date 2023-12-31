import useProfileContext from "features/profile/profile-context/use-profile-context";
import updateContactData from "core/profiles/update-contact-data.service";
import { useErrorToast } from "hooks/use-error-toast";
import { useCallback } from "react";
import useContactCardContext from "../../contact-card-context/use-contact-card-context";
import { useAuthState } from "hooks/use-auth-state";
import { useNavigate } from "react-router-dom";
import { BasicDataFormState } from "../../contact-card-context/contact-card-context";

const useUpdateContactData = (payload: BasicDataFormState) => {
  const { setLoading } = useContactCardContext();
  const { fetchProfile } = useProfileContext();
  const getToken = useGetToken();
  const { showErrorToast } = useErrorToast();

  return useCallback(async () => {
    try {
      const token = getToken();
      setLoading(true);
      const data = await updateContactData(token, payload);
      fetchProfile();
      return data;
    } catch (error) {
      showErrorToast(error);
    } finally {
      setLoading(false);
    }
  }, [fetchProfile, getToken, payload, setLoading, showErrorToast]);
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

export default useUpdateContactData;
