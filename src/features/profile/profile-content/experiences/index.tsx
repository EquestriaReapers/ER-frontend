import Typography from "@mui/material/Typography";
import { Experience } from "core/profiles/types";
import { boxStyles } from "../styles/styles";
import ShowExperiencesInProfile from "./show-profile-experiences/show-experiences";
import ExperienceModal from "features/profile/experiences/modal/modal";

const ProfileExperience = ({ isEditable, experiences }: Props) => {
  return (
    <div>
      <Typography variant="h4" sx={boxStyles}>
        Experiencia
        {isEditable && <ExperienceModal experiences={experiences} />}
      </Typography>
      <ShowExperiencesInProfile experiences={experiences} />
    </div>
  );
};

export interface Props {
  isEditable: boolean;
  experiences: Experience[];
}

export default ProfileExperience;
