import { Box, Button, Typography } from "@mui/material";
import {
  modalStyle,
  titleStyles,
  buttonStyle,
  inlineStyles,
} from "../styles/styles";
import ModalShowExperiences from "./show-experiences";
import { Experience } from "core/profiles/types";
import { ExperienceContent } from "../../types";

const ShowExperienceModalContent = ({
  experience,
  setContent,
  setAnExperience,
}: ShowExperienceModalContentProps) => {
  return (
    <Box sx={modalStyle}>
      <Box>
        <Typography sx={titleStyles}>Gestión de experiencias</Typography>
        <Box sx={inlineStyles}>
          <Typography>
            En esta sección podras gestionar las experiencias profesionales que
            has tenido
          </Typography>
          <Button
            sx={buttonStyle}
            onClick={() => setContent(ExperienceContent.Add)}
          >
            Agregar Experiencia
          </Button>
        </Box>
        <ModalShowExperiences
          experience={experience}
          setContent={setContent}
          setAnExperience={setAnExperience}
        />
      </Box>
    </Box>
  );
};

interface ShowExperienceModalContentProps {
  experience: Experience[];
  setContent: (content: ExperienceContent) => void;
  setAnExperience: (anExperience: Experience | null) => void;
}

export default ShowExperienceModalContent;
