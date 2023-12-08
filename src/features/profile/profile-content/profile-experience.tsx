import Typography from "@mui/material/Typography";
import { Experience } from "core/profiles/types";
import { boxStyles } from "./styles/styles";
import ShowExperiencesInProfile from "../experiences/show-experiences-in-profile/show-experiences";
import ExperienceModal from "../experiences/modal/modal";

const ProfileExperience = ({
  isEditable,
  currentProfileExperience,
}: ProfileExperienceProps) => {
  return (
    <div>
      <Typography variant="h4" sx={boxStyles}>
        Experiencia
        {isEditable && (
          <ExperienceModal experience={currentProfileExperience} />
        )}
      </Typography>
      <ShowExperiencesInProfile experience={currentProfileExperience} />
    </div>
  );
};

export interface ProfileExperienceProps {
  isEditable: boolean;
  currentProfileExperience: Experience[];
}

export default ProfileExperience;
