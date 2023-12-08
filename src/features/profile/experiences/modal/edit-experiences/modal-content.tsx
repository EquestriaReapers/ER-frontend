import { Box, Typography } from "@mui/material";
import { modalStyle } from "../styles/styles";
import { Experience } from "core/profiles/types";

const EditExperienceModalContent = ({
  anExperience,
  setContent,
}: EditExperienceModalContentProps) => {
  return (
    <Box sx={modalStyle}>
      <Typography>Editar experiencia</Typography>
    </Box>
  );
};

export default EditExperienceModalContent;

interface EditExperienceModalContentProps {
  anExperience: Experience;
  setContent: (arg0: number) => void;
}
