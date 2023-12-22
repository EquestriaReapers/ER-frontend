import { addProfileSkill } from "features/profile/services/profile/add-profile-skill.service";
import { useAuthState } from "hooks/use-auth-state";
import { useCallback } from "react";

const useAddSkill = ({ fetchProfile }: Payload) => {
  const { token } = useAuthState();

  const addSkill = useCallback(
    async (skillId: number) => {
      try {
        if (!token) return;
        const data = await addProfileSkill(token, { skillId });
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

export default useAddSkill;
