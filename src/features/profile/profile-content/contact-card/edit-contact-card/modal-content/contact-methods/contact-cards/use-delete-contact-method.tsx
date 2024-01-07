import useProfileContext from "features/profile/profile-context/use-profile-context";
import { deleteContactMethod } from "core/contact-method/delete-contact-method.service";
import { useErrorToast } from "hooks/use-error-toast";
import { useCallback } from "react";
import { useAuthState } from "hooks/use-auth-state";
import useContactCardContext from "../../../contact-card-context/use-contact-card-context";

const useDeleteContacthMethods = () => {
  const { setLoading } = useContactCardContext();
  const { fetchProfile } = useProfileContext();
  const { token } = useAuthState();
  const { showErrorToast } = useErrorToast();
  const deleteContactMethods = useCallback(
    async (contactId: number) => {
      try {
        if (!token) return;
        setLoading(true);
        const data = await deleteContactMethod(token, contactId);
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

  return deleteContactMethods;
};

export default useDeleteContacthMethods; //
