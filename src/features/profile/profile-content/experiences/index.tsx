import Typography from "@mui/material/Typography";
import { Experience } from "core/profiles/types";
import { boxStyles } from "./modal/styles";
import ShowProfileExperiencies from "./show-profile-experiences";
import ExperienceModalWrapper from "./modal/experience-modal-wrapper";

const Experiences = ({ isEditable, experiences }: Props) => {
  return (
    <>
      <div>
        <Typography variant="h4" sx={boxStyles}>
          Experiencia
        </Typography>
        <ShowProfileExperiencies experiences={experiences} />
      </div>
      {isEditable && <ExperienceModalWrapper experiences={experiences} />}
    </>
  );
};

export interface Props {
  isEditable: boolean;
  experiences: Experience[];
}

export default Experiences;
