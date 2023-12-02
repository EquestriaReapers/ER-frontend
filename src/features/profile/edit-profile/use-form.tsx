import { useAuthState } from "hooks/use-auth-state";
import { updateProfile } from "../services/profile.service";
import { FormEvent } from "react";
import { BackendError } from "app/exceptions";
import { toast } from "sonner";

const useForm = ({ setIsOpen, user }: EditFormProps) => {
  const { token } = useAuthState();
  const onSubmitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      console.log(user);
      if (!token || !user) return;
      const data = await updateProfile(token, user);
      console.log(data)
      setIsOpen(false);
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

export interface EditFormProps {
  setIsOpen: (arg0: boolean) => void;
  user: {
    name: string;
    description: string;
    mainTitle: string;
    residenceCountry: string;
  };
}
export default useForm;
