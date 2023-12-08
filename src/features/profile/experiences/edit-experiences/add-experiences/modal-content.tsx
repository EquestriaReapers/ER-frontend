import { Box, Button, Typography } from "@mui/material";
import { modalStyle } from "./styles/styles";

const AddExperienceModalContent = () => {
  return (
    <Box sx={modalStyle}>
      <Typography>Editar experiencia</Typography>
    </Box>
  );
};

export interface EditProfileModalContentProps {
  setIsOpen: (arg0: boolean) => void;
  experience: Experience[];
}

export default AddExperienceModalContent;
