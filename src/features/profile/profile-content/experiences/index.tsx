import Typography from "@mui/material/Typography";
import { Experience } from "core/profiles/types";
import { boxStyles } from "./modal/styles/styles";
import ShowProfileExperiencies from "./show-profile-experiences";
import ExperienceModal from "./modal";

const ProfileExperiences = ({ isEditable, experiences }: Props) => {
  return (
    <>
      <div>
        <Typography variant="h4" sx={boxStyles}>
          Experiencia
        </Typography>
        <ShowProfileExperiencies experiences={experiences} />
      </div>
      {isEditable && <ExperienceModal experiences={experiences} />}
    </>
  );
};

export interface Props {
  isEditable: boolean;
  experiences: Experience[];
}

export default ProfileExperiences;
