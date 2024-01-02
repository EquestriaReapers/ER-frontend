import { Box, Button, Typography } from "@mui/material";

import { useContext } from "react";
import { PortfolioContent } from "../../modal-context/types";
import PortfolioModalContext from "../../modal-context";
import ProjectsList from "./projects-list";
import { buttonStyle, inlineStyles, modalStyle, titleStyles } from "./styles";

const ShowPortfolio = ({ className }: Props) => {
  const { setContent } = useContext(PortfolioModalContext);

  return (
    <Box sx={modalStyle} className={className}>
      <Box>
        <Box className={"exp-header-container"} sx={titleStyles}>
          <Typography>Gestión de portafolio</Typography>
          <Box sx={inlineStyles}>
            <Typography className={"exp-show-description"}>
              En esta sección podrás gestionar las experiencias profesionales
              que has tenido
            </Typography>
            <Button
              sx={buttonStyle}
              className={"exp-show-button"}
              onClick={() => setContent(PortfolioContent.Add)}
            >
              Agregar Proyecto
            </Button>
          </Box>
        </Box>
        <ProjectsList />
      </Box>
    </Box>
  );
};

interface Props {
  className?: string;
}

export default ShowPortfolio;
