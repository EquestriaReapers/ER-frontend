import { Box, Button, Typography } from "@mui/material";
import {
  modalStyle,
  titleStyles,
  buttonStyle,
  inlineStyles,
} from "./styles.ts";
import { ExperienceContent } from "../../experiencies-modal-context/types.ts";
import ExperiencesModalContext from "../../experiencies-modal-context/index.tsx";
import { useContext } from "react";
import ExperiencesList from "./experiences-list/experiences-list.styled.tsx";

const ShowExperiences = ({ className }: Props) => {
  const { setContent } = useContext(ExperiencesModalContext);

  return (
    <Box sx={modalStyle} className={className}>
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
        <ExperiencesList />
      </Box>
    </Box>
  );
};

interface Props {
  className?: string;
}

export default ShowExperiences;
