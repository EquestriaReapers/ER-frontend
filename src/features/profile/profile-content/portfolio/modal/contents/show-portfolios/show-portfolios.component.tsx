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
      <Box sx={titleStyles}>
        <Typography sx={titleStyles}>Gestión de portafolio</Typography>
        <Box sx={inlineStyles}>
          <Typography
            sx={{
              color: "575757",
              fontFamily: "inter",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "normal",
            }}
          >
            Aquí podrás editar los proyectos de tu portafolio
          </Typography>
          <Button
            sx={buttonStyle}
            onClick={() => setContent(PortfolioContent.Add)}
          >
            Agregar Proyecto
          </Button>
        </Box>
      </Box>
      <ProjectsList />
    </Box>
  );
};

interface Props {
  className?: string;
}

export default ShowPortfolio;
