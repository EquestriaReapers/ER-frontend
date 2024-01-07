import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import PortfolioModalContext from "../../modal-context";
import { PortfolioContent } from "../../modal-context/types";
import useDeleteProject from "./use-delete-project";
import {
  deleteButtonStyle,
  deleteModalStyle,
  messageStyle,
  returnButtonStyle,
} from "./styles";

const DeleteProjectModalContent = ({ projectId }: Props) => {
  const { setContent } = useContext(PortfolioModalContext);
  const deleteProject = useDeleteProject({ projectId });

  return (
    <Box sx={deleteModalStyle}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "30px" }}>
        <Typography sx={messageStyle}>
          ¿Estás seguro de que quieres eliminar este proyecto?
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: "50px" }}>
          <Button
            onClick={() => setContent(PortfolioContent.Show)}
            variant="outlined"
            sx={returnButtonStyle}
          >
            Regresar
          </Button>
          <Button
            onClick={deleteProject}
            variant="contained"
            sx={deleteButtonStyle}
          >
            Eliminar
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export interface Props {
  projectId: number;
  className?: string;
}

export default DeleteProjectModalContent;
