import { Box, Typography } from "@mui/material";
import { modalStyle } from "../styles/styles";
import ModalShowExperiences from "./show-experiences";

const ShowExperienceModalContent = () => {
  return (
    <Box sx={modalStyle}>
      <Box sx={modalStyle}>
        <Typography>Gestión de experiencias</Typography>
        <Typography>
          En esta seccion podras gestionar las experiencias profesionales que
          has tenido
        </Typography>
        <form>
          <ModalShowExperiences experience={experience} />
        </form>
      </Box>
    </Box>
  );
};

export default ShowExperienceModalContent;
