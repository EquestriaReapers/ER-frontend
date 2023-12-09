import Typography from "@mui/material/Typography";
import { Experience } from "core/profiles/types";
import { boxStyles } from "./styles/styles";
import ShowExperiencesInProfile from "../experiences/show-experiences-in-profile/show-experiences";
import ExperienceModal from "../experiences/modal/modal";

const ProfileExperience = ({ isEditable, experiencies }: Props) => {
  return (
    <div>
      <Typography variant="h4" sx={boxStyles}>
        Experiencia
        {isEditable && <ExperienceModal experiencies={experiencies} />}
      </Typography>
      <ShowExperiencesInProfile experiencies={experiencies} />
    </div>
  );
};

export interface Props {
  isEditable: boolean;
  experiencies: Experience[];
}

export default ProfileExperience;
