import { Box, Button, Typography } from "@mui/material";
import {
  modalStyle,
  titleStyles,
  buttonStyle,
  inlineStyles,
} from "../styles/styles";
import ModalShowExperiences from "./show-experiences";
import { ExperienceContent } from "../../experiencies-modal-context/types";
import ExperiencesModalContext from "../../experiencies-modal-context";
import { useContext } from "react";

const ShowExperienceModalContent = () => {
  const { setContent } = useContext(ExperiencesModalContext);

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
        <ModalShowExperiences />
      </Box>
    </Box>
  );
};

export default ShowExperienceModalContent;
