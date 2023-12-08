import { addAProfileExperience } from "features/profile/services/experience.service";
import { useAuthState } from "hooks/use-auth-state";
import { FormEvent } from "react";

const useAddExperienceForm = ({ setIsOpen, experience }: AddExperienceFormProps) => {
  const { token } = useAuthState();
  const onSubmitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (!token || !experience) return;
      const data = addAProfileExperience(experience, token);
      setIsOpen(false);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  return { onSubmitForm };
};

export interface AddExperienceFormProps {
  setIsOpen: (arg0: boolean) => void;
  experience: {
    profileId: number;
    businessName: string;
    role: string;
    location: string;
    startDate: Date;
    endDate: Date | null;
    description: string;
  };
}

export default useAddExperienceForm;
