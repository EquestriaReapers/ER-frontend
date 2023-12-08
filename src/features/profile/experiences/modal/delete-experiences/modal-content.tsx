import { Box, Typography } from "@mui/material";
import { modalStyle } from "../styles/styles";

const DeleteExperienceModalContent = () => {
  return (
    <Box sx={modalStyle}>
      <Typography>Borrar experiencia</Typography>
    </Box>
  );
};

export default DeleteExperienceModalContent;

