import useProfileContext from "features/profile/profile-context/use-profile-context";
import { addContactMethod } from "core/cardcontent/add-contact-method.service";
import { useErrorToast } from "hooks/use-error-toast";
import { useCallback } from "react";
import { useAuthState } from "hooks/use-auth-state";

const useAddContacthMethods = (name: string) => {
  const { fetchProfile } = useProfileContext();
  const { token } = useAuthState();
  const { showErrorToast } = useErrorToast();

  const addContactMethods = useCallback(async () => {
    try {
      if (!token) return;
      const data = await addContactMethod(token, name);
      fetchProfile();
      return data;
    } catch (error) {
      showErrorToast(error);
    }
  }, [fetchProfile, name, showErrorToast, token]);

  return addContactMethods;
};

export default useAddContacthMethods; //
