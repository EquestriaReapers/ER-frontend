import { useAuthState } from "hooks/use-auth-state";
import { updateProfile } from "../services/profile/update-profile.service";
import { FormEvent } from "react";
import { BackendError } from "app/exceptions";
import { toast } from "sonner";

const useOnSubmitForm = ({ setIsOpen, user, fetchProfile }: Props) => {
  const { token } = useAuthState();
  const onSubmitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (!token || !user) return;
      const data = await updateProfile(token, user);
      setIsOpen(false);
      fetchProfile();
      return data;
    } catch (error) {
      if (error instanceof BackendError) {
        toast.error(error.message);
      } else {
        toast.error("Error desconocido");
      }
    }
  };
  return { onSubmitForm };
};

export interface Props {
  setIsOpen: (isOpen: boolean) => void;
  user: {
    description: string;
    mainTitle: string;
    lastname: string;
    name: string;
  };
  fetchProfile: () => void;
}
export default useOnSubmitForm;
