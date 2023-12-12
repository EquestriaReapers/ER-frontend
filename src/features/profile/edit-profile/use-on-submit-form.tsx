import { useAuthState } from "hooks/use-auth-state";
import { updateProfile } from "../services/profile.service";
import { FormEvent } from "react";

const useOnSubmitForm = ({ setIsOpen, user }: Props) => {
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

export interface Props {
  setIsOpen: (isOpen: boolean) => void;
  user: {
    name: string;
    description: string;
  };
}
export default useOnSubmitForm;
