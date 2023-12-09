import Typography from "@mui/material/Typography";
import { Experience } from "core/profiles/types";
import { boxStyles } from "../styles/styles";
import ShowExperiencesInProfile from "../../experiences/show-experiences-in-profile/show-experiences";
import ExperienceModal from "../../experiences/modal/modal";

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

interface Props {
  isEditable: boolean;
  experiences: Experience[];
}

export default ProfileExperience;
