import { Box, Button, Typography } from "@mui/material";
import { modalStyle, titleStyles, buttonStyle } from "./styles.ts";
import { ExperienceContent } from "../../experiencies-modal-context/types.ts";
import ExperiencesModalContext from "../../experiencies-modal-context/index.tsx";
import { useContext } from "react";
import ExperiencesList from "./experiences-list/experiences-list.styled.tsx";
import { inlineStyles } from "../../styles.ts";

const ShowExperiences = ({ className }: Props) => {
  const { setContent } = useContext(ExperiencesModalContext);

  return (
    <Box sx={modalStyle} className={className}>
      <Box>
        <Box className={"exp-header-container"}>
          <Typography sx={titleStyles}>Gestión de experiencias</Typography>
          <Box sx={inlineStyles}>
            <Typography className={"exp-show-description"}>
              En esta sección podrás gestionar las experiencias profesionales
              que has tenido
            </Typography>
            <Button
              sx={buttonStyle}
              className={"exp-show-button"}
              onClick={() => setContent(ExperienceContent.Add)}
            >
              Agregar Experiencia
            </Button>
          </Box>
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
