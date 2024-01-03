import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import PortfolioModalContext from "../../modal-context";
import { PortfolioContent } from "../../modal-context/types";
import { modalStyle } from "../show-portfolios/styles";
import useDeleteProject from "./use-delete-project";

const DeleteProjectModalContent = ({ projectId, className }: Props) => {
  const { setContent } = useContext(PortfolioModalContext);
  const deleteProject = useDeleteProject({ projectId });

  return (
    <Box className={className} sx={modalStyle}>
      <form>
        <Typography className={"message"}>
          ¿Estás seguro de que quieres eliminar este proyecto?
        </Typography>
        <Box className={"button-box"}>
          <Button
            onClick={() => setContent(PortfolioContent.Show)}
            className={"left-button"}
          >
            Regresar
          </Button>
          <Button
            onClick={deleteProject}
            variant="contained"
            className={"right-button"}
          >
            Confirmar
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export interface Props {
  projectId: number;
  className?: string;
}

export default DeleteProjectModalContent;
