import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import PortfolioModalContext from "../../modal-context";
import { PortfolioContent } from "../../modal-context/types";
import useDeleteProject from "./use-delete-project";
import { deleteModalStyle } from "./styles";

const DeleteProjectModalContent = ({ projectId }: Props) => {
  const { setContent } = useContext(PortfolioModalContext);
  const deleteProject = useDeleteProject({ projectId });

  return (
    <Box sx={deleteModalStyle}>
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column", gap: "30px" }}
      >
        <Typography
          sx={{
            color: "#000",
            textAlign: "center",
            fontFamily: "inter",
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "normal",
          }}
        >
          ¿Estás seguro de que quieres eliminar este proyecto?
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: "50px" }}>
          <Button
            onClick={() => setContent(PortfolioContent.Show)}
            variant="outlined"
            sx={{
              textAlign: "center",
              fontFamily: "inter",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "normal",
              textTransform: "capitalize",
              px: "50px",
              py: "10px",
            }}
          >
            Regresar
          </Button>
          <Button
            onClick={deleteProject}
            variant="contained"
            sx={{
              color: "#FCFEFE",
              textAlign: "center",
              fontFamily: "inter",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "normal",
              textTransform: "capitalize",
              px: "50px",
              py: "10px",
            }}
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
