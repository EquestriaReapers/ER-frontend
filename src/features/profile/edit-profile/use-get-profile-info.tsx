import { useAuthState } from "hooks/use-auth-state";
import { useCallback } from "react";
import { fetchOneProfile } from "../services/profile/fetch-one-profile.service";

const useGetProfileInfo = ({ setName, setDescription }: Props) => {
  const { token, user } = useAuthState();
  const getUserInfo = useCallback(async () => {
    try {
      if (!token || !user) return;
      const data = await fetchOneProfile(user.id);
      setName(data.user.name);
      setDescription(data.description);
    } catch (error) {
      console.log(error);
    }
  }, [setDescription, setName, token, user]);

  return { getUserInfo };
};

export default useGetProfileInfo;

interface Props {
  setName: (name: string) => void;
  setDescription: (description: string) => void;
}
