import { Box, Button, Typography } from "@mui/material";

import { useContext } from "react";
import { PortfolioContent } from "../../modal-context/types";

const ShowPortfolio = ({ className }: Props) => {
  const { setContent } = useContext(PortfolioModalContext);

  return (
    <Box>
      <Box>
        <Box className={"exp-header-container"}>
          <Typography>Gestión de experiencias</Typography>
          <Box>
            <Typography className={"exp-show-description"}>
              En esta sección podrás gestionar las experiencias profesionales
              que has tenido
            </Typography>
            <Button
              className={"exp-show-button"}
              onClick={() => setContent(PortfolioContent.Add)}
            >
              Agregar Experiencia
            </Button>
          </Box>
        </Box>
        <PortfolioList />
      </Box>
    </Box>
  );
};

interface Props {
  className?: string;
}

export default ShowPortfolio;
