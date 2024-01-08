import { Box, Button, Typography } from "@mui/material";

import { useContext } from "react";
import { PortfolioContent } from "../../modal-context/types";
import PortfolioModalContext from "../../modal-context";
import ProjectsList from "./projects-list";
import { buttonStyle, inlineStyles, modalStyle, titleStyles } from "./styles";

const ShowPortfolio = () => {
  const { setContent } = useContext(PortfolioModalContext);

  return (
    <Box sx={modalStyle}>
      <Box sx={titleStyles}>
        <Typography sx={titleStyles}>Gestión de portafolio</Typography>
        <Box sx={inlineStyles}>
          <Typography
            sx={{
              color: "575757",
              fontFamily: "inter",
              fontSize: { xs: "16px", md: "18px" },
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
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "33px",
          overflowY: "auto",
          height: "100%",
          maxHeight: {
            xs: "350px",
            sm: "400px",
            md: "425px",
          },
          justifyContent: "center",
          backgroundColor: "#F4F4F4",
          py: { xs: "20px", sm: "40px" },
          px: { xs: "0", sx: "40px" },
          borderRadius: "6px",
        }}
      >
        <ProjectsList />
      </Box>
    </Box>
  );
};

export default ShowPortfolio;
