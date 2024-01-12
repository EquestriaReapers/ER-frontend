import { updateProfileEducation } from "core/auth/education/update-profile-education";
import { useAuthState } from "hooks/use-auth-state";
import { useErrorToast } from "hooks/use-error-toast";
import { useSuccessToast } from "hooks/use-success-toast";
import { FormEvent, useCallback, useContext } from "react";
import { EducationContent } from "../../education-modal-context/types";
import { useNavigate } from "react-router-dom";
import useProfileContext from "features/profile/profile-context/use-profile-context";
import { Dayjs } from "dayjs";
import EducationModalContext from "../../education-modal-context";

const useForm = ({ anEducation, educationId }: EditEducationFormProps) => {
  const { setContent, setLoading } = useContext(EducationModalContext);
  const { fetchProfile } = useProfileContext();
  const getToken = useGetToken();
  const { showSuccessToast } = useSuccessToast();
  const { showErrorToast } = useErrorToast();

  const onSubmitForm = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      try {
        const token = getToken();
        if (!anEducation.title || !anEducation.entity || !anEducation.endDate) {
          showErrorToast("Por favor, rellena todos los campos");
          return;
        }
        setLoading(true);

        const data = await updateProfileEducation(
          {
            principal: anEducation.principal,
            title: anEducation.title,
            entity: anEducation.entity,
            endDate: anEducation.endDate?.format("YYYY-MM-DD") ?? null,
          },
          token,
          educationId
        );
        showSuccessToast("Educación editada con éxito");
        setContent(EducationContent.Show);
        fetchProfile();
        return data;
      } catch (error) {
        showErrorToast(error);
      } finally {
        setLoading(false);
      }
    },
    [
      getToken,
      anEducation.principal,
      anEducation.title,
      anEducation.entity,
      anEducation.endDate,
      setLoading,
      educationId,
      showSuccessToast,
      setContent,
      fetchProfile,
      showErrorToast,
    ]
  );

  return onSubmitForm;
};

export interface EditEducationFormProps {
  anEducation: {
    principal: boolean | null;
    title: string;
    entity: string | null;
    endDate?: Dayjs | null;
  };
  educationId: number;
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

export default useForm;
