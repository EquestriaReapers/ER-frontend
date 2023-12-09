import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";
import { modalStyle } from "../styles/styles";
import useDeleteExperienceForm from "./use-form";
import { ExperienceContent } from "../../modal/types";

const DeleteExperienceModalContent = ({ setContent, experienceId }: Props) => {
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
  setContent: (arg0: ExperienceContent) => void;
  experienceId: number;
}

export default DeleteExperienceModalContent;
