import useProfileContext from "features/profile/profile-context/use-profile-context";
import { addContactMethod } from "core/contact-method/add-contact-method.service";
import { useErrorToast } from "hooks/use-error-toast";
import { useCallback } from "react";
import { useAuthState } from "hooks/use-auth-state";

const useAddContacthMethods = () => {
  const { fetchProfile } = useProfileContext();
  const { token } = useAuthState();
  const { showErrorToast } = useErrorToast();
  const addContactMethods = useCallback(
    async (email: string) => {
      try {
        if (!token) return;
        const data = await addContactMethod({ email }, token);
        fetchProfile();
        return data;
      } catch (error) {
        showErrorToast(error);
      }
    },
    [fetchProfile, showErrorToast, token]
  );

  return addContactMethods;
};

export default useAddContacthMethods; //
