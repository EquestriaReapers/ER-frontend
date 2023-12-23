import { addProfileNewSkill } from "features/profile/services/profile/add-profile-skill.service";
import { useAuthState } from "hooks/use-auth-state";
import { useCallback } from "react";

const useAddNewSkill = ({ fetchProfile }: Payload) => {
  const { token } = useAuthState();

  const addSkill = useCallback(
    async (name: string) => {
      try {
        if (!token) return;
        const data = await addProfileNewSkill(token, { name });
        fetchProfile();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    [token]
  );
  return addSkill;
};

export interface Payload {
  fetchProfile: () => void;
}

export default useAddNewSkill;
