import ShowExperiences from "../experiences/show-experiences/show-experiences";
import Typography from "@mui/material/Typography";
import { Experience } from "core/profiles/types";
import { boxStyles } from "./styles/styles";
import { useEffect, useState } from "react";
import { getAllExperiences } from "../services/experience.service";
import { useAuthState } from "hooks/use-auth-state";
import EditExperienceModal from "../experiences/edit-experiences/modal";

const ProfileExperience = ({
  isEditable,
  currentProfileExperience,
}: ProfileExperienceProps) => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const { token } = useAuthState();
  console.log(experiences);
  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        if (!token) return;
        const experiencesData = await getAllExperiences(token);
        setExperiences(experiencesData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchExperiences();
  }, [token]);

  return (
    <div>
      <Typography variant="h4" sx={boxStyles}>
        Experiencia{isEditable && <EditExperienceModal />}
      </Typography>
      <ShowExperiences experience={currentProfileExperience} />
    </div>
  );
};

export interface ProfileExperienceProps {
  isEditable: boolean;
  currentProfileExperience: Experience[];
}

export default ProfileExperience;
