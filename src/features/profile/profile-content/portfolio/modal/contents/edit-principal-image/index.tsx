import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import { Portfolio } from "core/profiles/types";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { useContext } from "react";
import PortfolioModalContext from "../../modal-context";
import { PortfolioContent } from "../../modal-context/types";
import useEditPrincipalImageModalContent from "./use-edit-principal-image-form-state";
import {
  boxButtonStyles,
  buttonStyle,
  headerStyles,
  modalStyle,
  titleStyles,
} from "./styles";
import useForm from "./use-form";

const EditPrincipalImageModalContent = ({ project }: Props) => {
  const { setContent } = useContext(PortfolioModalContext);
  const { imagePrincipal, onImagePrincipalChange } =
    useEditPrincipalImageModalContent();

  const projectState = { imagePrincipal };

  const projectId = project.id;

  const onSubmitForm = useForm({
    project: projectState,
    projectId,
  });

  return (
    <Box sx={modalStyle}>
      <Box sx={headerStyles}>
        <Box>
          <IconButton onClick={() => setContent(PortfolioContent.Show)}>
            <ArrowBackIcon />
          </IconButton>
        </Box>
        <Typography sx={titleStyles}>Cambiar Portada de Proyecto</Typography>

        <Typography>
          Aquí podrás seleccionar la imagen principal de tu proyecto
        </Typography>
      </Box>
      <Box>
        <form onSubmit={onSubmitForm}>
          <Box>
            <Box sx={{ mb: 2 }}>
              <TextField
                type="file"
                onChange={onImagePrincipalChange}
                inputProps={{ multiple: true }}
              />
            </Box>
          </Box>
          <Box sx={boxButtonStyles}>
            <Button type="submit" sx={buttonStyle}>
              Guardar Cambios
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default EditPrincipalImageModalContent;

interface Props {
  project: Portfolio;
}
