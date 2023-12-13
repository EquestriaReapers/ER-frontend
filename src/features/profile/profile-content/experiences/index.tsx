import { Typography, Box } from "@mui/material";
import { Experience } from "core/profiles/types";
import { boxWithButton } from "./modal/styles";
import ShowProfileExperiencies from "./show-profile-experiences";
import ExperienceModalWrapper from "./modal/experience-modal-wrapper";

const Experiences = ({ isEditable, experiences }: Props) => {
  return (
    <>
      <div>
        <Box sx={boxWithButton}>
          <Typography variant="h4">Experiencia</Typography>
          {isEditable && <ExperienceModalWrapper experiences={experiences} />}
        </Box>
        <ShowProfileExperiencies experiences={experiences} />
      </div>
    </>
  );
};

export interface Props {
  isEditable: boolean;
  experiences: Experience[];
}

export default Experiences;
