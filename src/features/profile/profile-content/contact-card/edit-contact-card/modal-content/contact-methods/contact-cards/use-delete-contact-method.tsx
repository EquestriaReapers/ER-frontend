import useProfileContext from "features/profile/profile-context/use-profile-context";
import { deleteContactMethod } from "core/contact-method/delete-contact-method.service";
import { useErrorToast } from "hooks/use-error-toast";
import { useCallback } from "react";
import { useAuthState } from "hooks/use-auth-state";

const useDeleteContacthMethods = () => {
  const { fetchProfile } = useProfileContext();
  const { token } = useAuthState();
  const { showErrorToast } = useErrorToast();
  const deleteContactMethods = useCallback(
    async (contactId: number) => {
      try {
        if (!token) return;
        const data = await deleteContactMethod(token, contactId);
        fetchProfile();
        return data;
      } catch (error) {
        showErrorToast(error);
      }
    },
    [fetchProfile, showErrorToast, token]
  );

  return deleteContactMethods;
};

export default useDeleteContacthMethods; //
