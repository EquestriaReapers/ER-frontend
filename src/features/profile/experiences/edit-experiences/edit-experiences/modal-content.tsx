import { Box, Button, Typography } from "@mui/material";
import { modalStyle } from "./styles/styles";

const EditExperienceModalContent = ({
  setIsOpen,
  experience,
}: EditProfileModalContentProps) => {
  useEditExperienceFormState();
  console.log(experience);

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

export default EditExperienceModalContent;
