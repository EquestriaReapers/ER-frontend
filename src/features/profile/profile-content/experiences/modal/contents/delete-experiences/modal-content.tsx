import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";
import { modalStyle } from "../styles/styles";
import useDeleteExperienceForm from "./use-form";
import { ExperienceContent } from "../../experiencies-modal-context/types";
import { useContext } from "react";
import ExperiencesModalContext from "../../experiencies-modal-context";

const DeleteExperienceModalContent = ({ experienceId }: Props) => {
  const { setContent } = useContext(ExperiencesModalContext);
  const { onSubmitForm } = useDeleteExperienceForm({
    setContent,
    experienceId,
  });
  return (
    <Box sx={modalStyle}>
      <form onSubmit={onSubmitForm}>
        <Typography>
          ¿Estás seguro de que quieres borrar la experiencia?
        </Typography>
        <Button onClick={() => setContent(ExperienceContent.Show)}>
          Regresar
        </Button>
        <Button type="submit" variant="contained">
          Confirmar
        </Button>
      </form>
    </Box>
  );
};

export interface Props {
  experienceId: number;
}

export default DeleteExperienceModalContent;
