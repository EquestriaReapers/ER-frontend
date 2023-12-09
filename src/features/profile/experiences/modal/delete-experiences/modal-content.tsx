import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";
import { modalStyle } from "../styles/styles";
import useDeleteExperienceForm from "./use-form";

const DeleteExperienceModalContent = ({
  setContent,
  experienceId,
}: DeleteExperienceModalContentProps) => {
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
        <Button onClick={() => setContent(0)}>Regresar</Button>
        <Button type="submit" variant="contained">
          Confirmar
        </Button>
      </form>
    </Box>
  );
};

export interface DeleteExperienceModalContentProps {
  setContent: (arg0: number) => void;
  experienceId: number;
}

export default DeleteExperienceModalContent;
