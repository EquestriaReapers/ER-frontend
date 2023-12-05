import ShowExperiences from "../experiences/show-experiences/show-experiences";
import Typography from "@mui/material/Typography";
import EditExperienceModal from "../experiences/edit-experiences/modal";
import { Experience } from "core/profiles/types";
import { useEffect, useState } from "react";
import { getAllExperiences } from "../services/experience.service";
import { useAuthState } from "hooks/use-auth-state";

const ProfileExperience = ({
  isEditable,
  currentProfileExperience,
}: ProfileExperienceProps) => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const { token } = useAuthState();
  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        if (!token) return;
        const experiencesData = await getAllExperiences(token);
        setExperiences(experiencesData.experience);
        console.error(experiencesData.experience);
      } catch (error) {
        console.error(error);
      }
    };

    fetchExperiences();
  }, []);

  return (
    <div>
      <Typography variant="h4">Experiencia:</Typography>
      {isEditable && <EditExperienceModal />}
      <ShowExperiences experience={currentProfileExperience} />
    </div>
  );
};

export interface ProfileExperienceProps {
  isEditable: boolean;
  currentProfileExperience: Experience[];
}

export default ProfileExperience;
