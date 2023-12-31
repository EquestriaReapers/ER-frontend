import { addAProfileExperience } from "core/experience/add-profile-experience";
import { useAuthState } from "hooks/use-auth-state";
import { useErrorToast } from "hooks/use-error-toast";
import { useSuccessToast } from "hooks/use-success-toast";
import { FormEvent, useCallback, useContext } from "react";
import { ExperienceContent } from "../../experiences-modal-context/types";
import ExperiencesModalContext from "../../experiences-modal-context";
import { Dayjs } from "dayjs";
import { useNavigate } from "react-router";
import useProfileContext from "features/profile/profile-context/use-profile-context";

const useAddExperienceForm = ({ experience }: AddExperienceFormProps) => {
  const getToken = useGetToken();
  const { showSuccessToast } = useSuccessToast();
  const { showErrorToast } = useErrorToast();
  const { setContent } = useContext(ExperiencesModalContext);
  const { fetchProfile } = useProfileContext();

  const onSubmitForm = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      try {
        const token = getToken();
        if (
          !experience.businessName ||
          !experience.role ||
          !experience.location ||
          !experience.startDate ||
          !experience.description
        ) {
          showErrorToast("Por favor, rellena todos los campos");
          return;
        }

        const data = addAProfileExperience(
          {
            businessName: experience.businessName,
            role: experience.role,
            location: experience.location,
            description: experience.description,
            startDate: experience.startDate.format("YYYY-MM-DD"),
            endDate: experience.endDate?.format("YYYY-MM-DD") ?? null,
          },
          token
        );

        setContent(ExperienceContent.Show);
        showSuccessToast("Experiencia agregada con éxito");
        fetchProfile();

        return data;
      } catch (error) {
        showErrorToast(error);
      }
    },
    [
      getToken,
      experience,
      setContent,
      showSuccessToast,
      fetchProfile,
      showErrorToast,
    ]
  );

  return { onSubmitForm };
};

export interface AddExperienceFormProps {
  experience: {
    businessName: string | null;
    role: string | null;
    location: string | null;
    startDate: Dayjs | null;
    endDate?: Dayjs | null;
    description: string | null;
  };
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

export default useAddExperienceForm;
