import { useAuthState } from "hooks/use-auth-state";
import {
  UpdateProfileBody,
  updateProfile,
} from "../../services/profile/update-profile.service";
import { FormEvent, useCallback } from "react";
import { useSuccessToast } from "hooks/use-success-toast";
import { useErrorToast } from "hooks/use-error-toast";
import useProfileContext from "features/profile/profile-context/use-profile-context";
import { useNavigate } from "react-router-dom";

const useOnSubmitForm = ({ setIsOpen, user }: Props) => {
  const { fetchProfile } = useProfileContext();
  const { showSuccessToast } = useSuccessToast();
  const { showErrorToast } = useErrorToast();
  const getToken = useGetToken();

  const onSubmitForm = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      try {
        const token = getToken();
        if (!validatePayload(user)) {
          showErrorToast("Debe rellenar todos los campos");
          return;
        }

        const data = await updateProfile(token, user);

        setIsOpen(false);
        showSuccessToast("Perfil editado con éxito");
        fetchProfile();
        return data;
      } catch (error) {
        showErrorToast(error);
      }
    },
    [fetchProfile, getToken, setIsOpen, showErrorToast, showSuccessToast, user]
  );
  return { onSubmitForm };
};

function validatePayload(
  payload: Partial<UpdateProfileBody>
): payload is UpdateProfileBody {
  return (
    !!payload.name &&
    !!payload.lastname &&
    !!payload.mainTitle &&
    !!payload.description
  );
}

function useGetToken() {
  const navigate = useNavigate();
  const { token } = useAuthState();

  return useCallback(() => {
    if (!token) {
      navigate("/login");
      throw new Error(
        "No se ha encontrado un token local para hacer la peticion"
      );
    }

    return token;
  }, [navigate, token]);
}

export interface Props {
  setIsOpen: (isOpen: boolean) => void;
  user: Partial<UpdateProfileBody>;
}

export default useOnSubmitForm;
