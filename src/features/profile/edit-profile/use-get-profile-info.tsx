import { useAuthState } from "hooks/use-auth-state";
import { useCallback } from "react";
import { fetchOneProfile } from "../services/profile/fetch-one-profile.service";
import { useErrorToast } from "hooks/use-error-toast";

const useGetProfileInfo = ({
  setName,
  setDescription,
  setMainTitle,
}: Props) => {
  const { showErrorToast } = useErrorToast();
  const { user } = useAuthState();
  const getUserInfo = useCallback(async () => {
    try {
      if (!user) return;
      const data = await fetchOneProfile(user.id);
      setName(data.user.name);
      setDescription(data.description);
      setMainTitle(data.mainTitle);
    } catch (error) {
      showErrorToast(error);
    }
  }, [setDescription, setMainTitle, setName, showErrorToast, user]);

  return { getUserInfo };
};

export default useGetProfileInfo;

interface Props {
  setName: (name: string) => void;
  setDescription: (description: string) => void;
  setMainTitle: (mainTitle: string) => void;
}
