import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";
import { modalStyle } from "../styles/styles";
import { Experience } from "core/profiles/types";

const DeleteExperienceModalContent = ({
  setContent,
  anExperience,
}: DeleteExperienceModalContentProps) => {
  console.log(anExperience);
  return (
    <Box sx={modalStyle}>
      <Typography>
        ¿Estás seguro de que quieres borrar la experiencia?
      </Typography>
      <Button onClick={() => setContent(0)}>Regresar</Button>
      <Button variant="contained">Confirmar</Button>
    </Box>
  );
};

export interface DeleteExperienceModalContentProps {
  setContent: (arg0: number) => void;
  anExperience: Experience;
}

export default DeleteExperienceModalContent;
