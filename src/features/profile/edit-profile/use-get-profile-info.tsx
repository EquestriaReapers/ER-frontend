import { useAuthState } from "hooks/use-auth-state";
import { useCallback } from "react";
import { fetchOneProfile } from "../services/profile/fetch-one-profile.service";
import { useErrorToast } from "hooks/use-error-toast";

const useGetProfileInfo = ({ setName, setDescription }: Props) => {
  const { token, user } = useAuthState();
  const { showErrorToast } = useErrorToast();
  const getUserInfo = useCallback(async () => {
    try {
      if (!token || !user) return;
      const data = await fetchOneProfile(token, user.id);
      setName(data.user.name);
      setDescription(data.description);
    } catch (error) {
      showErrorToast(error);
    }
  }, [setDescription, setName, token, user, showErrorToast]);

  return { getUserInfo };
};

export default useGetProfileInfo;

interface Props {
  setName: (name: string) => void;
  setDescription: (description: string) => void;
}
