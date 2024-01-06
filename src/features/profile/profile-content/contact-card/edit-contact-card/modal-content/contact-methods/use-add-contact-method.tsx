import useProfileContext from "features/profile/profile-context/use-profile-context";
import { addContactMethod } from "core/contact-method/add-contact-method.service";
import { useErrorToast } from "hooks/use-error-toast";
import { useCallback } from "react";
import { useAuthState } from "hooks/use-auth-state";
import useContactCardContext from "../../contact-card-context/use-contact-card-context";

const useAddContacthMethods = () => {
  const { setLoading } = useContactCardContext();
  const { fetchProfile } = useProfileContext();
  const { token } = useAuthState();
  const { showErrorToast } = useErrorToast();
  const addContactMethods = useCallback(
    async (email: string) => {
      try {
        if (!token) return;
        setLoading(true);
        const data = await addContactMethod({ email }, token);
        fetchProfile();
        return data;
      } catch (error) {
        showErrorToast(error);
      } finally {
        setLoading(false);
      }
    },
    [fetchProfile, setLoading, showErrorToast, token]
  );

  return addContactMethods;
};

export default useAddContacthMethods; //
