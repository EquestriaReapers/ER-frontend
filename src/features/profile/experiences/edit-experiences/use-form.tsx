import { updateProfile } from "features/profile/services/profile.service";
import { useAuthState } from "hooks/use-auth-state";

import { FormEvent } from "react";

const useForm = ({ setIsOpen, user }: EditFormProps) => {
  const { token } = useAuthState();
  const onSubmitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (!token || !user) return;
      const data = await updateProfile(token, user);
      setIsOpen(false);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  return { onSubmitForm };
};

export interface EditFormProps {
  setIsOpen: (arg0: boolean) => void;
  user: {
    name: string;
    mainTitle: string;
    description: string;
    countryResidence: string;
  };
}
export default useForm;
