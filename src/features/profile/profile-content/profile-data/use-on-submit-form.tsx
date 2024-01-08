import { useAuthState } from "hooks/use-auth-state";
import {
  UpdateProfileBody,
  updateProfile,
} from "../../../../core/profiles/update-profile.service";
import { FormEvent, useCallback, useState } from "react";
import { useSuccessToast } from "hooks/use-success-toast";
import { useErrorToast } from "hooks/use-error-toast";
import useProfileContext from "features/profile/profile-context/use-profile-context";
import { useNavigate } from "react-router-dom";

const useOnSubmitForm = ({ setIsOpen, user }: Props) => {
  const { fetchProfile } = useProfileContext();
  const { showSuccessToast } = useSuccessToast();
  const { showErrorToast } = useErrorToast();
  const [loading, setLoading] = useState(false);
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
        setLoading(true);
        const data = await updateProfile(token, user);

        showSuccessToast("Perfil editado con éxito");
        await fetchProfile();
        setIsOpen(false);
        return data;
      } catch (error) {
        showErrorToast(error);
      } finally {
        setLoading(false);
      }
    },
    [fetchProfile, getToken, setIsOpen, showErrorToast, showSuccessToast, user]
  );
  return { onSubmitForm, loading };
};

function validatePayload(
  payload: Partial<UpdateProfileBody>
): payload is UpdateProfileBody {
  return !!payload.name && !!payload.lastname && !!payload.description;
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
