import { updateProfileExperience } from "core/experience/update-profile-experience";
import { useAuthState } from "hooks/use-auth-state";
import { useErrorToast } from "hooks/use-error-toast";
import { useSuccessToast } from "hooks/use-success-toast";
import { FormEvent, useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import useProfileContext from "features/profile/profile-context/use-profile-context";
import { Dayjs } from "dayjs";
import PortfolioModalContext from "../../modal-context";
import { PortfolioContent } from "../../modal-context/types";

const useForm = ({ anExperience, experienceId }: EditExperienceFormProps) => {
  const { setContent, setLoading } = useContext(PortfolioModalContext);
  const { fetchProfile } = useProfileContext();
  const getToken = useGetToken();
  const { showSuccessToast } = useSuccessToast();
  const { showErrorToast } = useErrorToast();

  const onSubmitForm = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      try {
        const token = getToken();
        if (
          !anExperience.businessName ||
          !anExperience.role ||
          !anExperience.location ||
          !anExperience.startDate ||
          !anExperience.description
        ) {
          showErrorToast("Por favor, rellena todos los campos");
          return;
        }

        setLoading(true);
        const data = await updateProfileExperience(
          {
            businessName: anExperience.businessName,
            role: anExperience.role,
            location: anExperience.location,
            description: anExperience.description,
            startDate: anExperience.startDate.format("YYYY-MM-DD"),
            endDate: anExperience.endDate?.format("YYYY-MM-DD") ?? null,
          },
          token,
          experienceId
        );
        showSuccessToast("Experiencia editada con éxito");
        setContent(PortfolioContent.Show);
        await fetchProfile();
        return data;
      } catch (error) {
        showErrorToast(error);
      } finally {
        setLoading(false);
      }
    },
    [
      getToken,
      anExperience.businessName,
      anExperience.role,
      anExperience.location,
      anExperience.startDate,
      anExperience.description,
      anExperience.endDate,
      setLoading,
      experienceId,
      showSuccessToast,
      setContent,
      fetchProfile,
      showErrorToast,
    ]
  );

  return onSubmitForm;
};

export interface EditExperienceFormProps {
  anExperience: {
    businessName: string | null;
    role: string | null;
    location: string | null;
    startDate: Dayjs | null;
    endDate?: Dayjs | null;
    description: string | null;
  };
  experienceId: number;
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
