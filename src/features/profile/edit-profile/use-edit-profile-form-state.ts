import { useEffect, useState, ChangeEvent, useCallback } from "react";
import { useAuthState } from "hooks/use-auth-state";
import { fetchOneProfile } from "../services/profile.service";
import { BackendError } from "app/exceptions";
import { toast } from "sonner";

const useEditProfileFormState = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const onChangeDescription = (event: ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const { token, user } = useAuthState();
  const getUserInfo = useCallback(async () => {
    try {
      if (!token || !user) return;
      const data = await fetchOneProfile(token, user.id);
      setName(data.user.name);
      setDescription(data.description);
    } catch (error) {
      if (error instanceof BackendError) {
        toast.error(error.message);
      } else {
        toast.error("Error desconocido");
      }
    }
  }, [setDescription, setName, token, user]);

  useEffect(() => {
    getUserInfo();
  }, [getUserInfo]);

  return {
    name,
    description,
    setName,
    setDescription,
    onChangeName,
    onChangeDescription,
  };
};

export default useEditProfileFormState;
