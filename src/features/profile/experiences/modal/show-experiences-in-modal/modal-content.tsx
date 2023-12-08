import { Box, Button, Typography } from "@mui/material";
import { modalStyle } from "../styles/styles";
import ModalShowExperiences from "./show-experiences";
import { Experience } from "core/profiles/types";

const ShowExperienceModalContent = ({
  experience,
  setContent,
  setAnExperience,
}: ShowExperienceModalContentProps) => {
  return (
    <Box sx={modalStyle}>
      <Box sx={modalStyle}>
        <Typography>Gestión de experiencias</Typography>
        <Typography>
          En esta seccion podras gestionar las experiencias profesionales que
          has tenido
        </Typography>
        <Button onClick={() => setContent(1)}></Button>
        <ModalShowExperiences
          experience={experience}
          setContent={setContent}
          setAnExperience={setAnExperience}
        />
      </Box>
    </Box>
  );
};

interface ShowExperienceModalContentProps {
  experience: Experience[];
  setContent: (arg0: number) => void;
  setAnExperience: (anExperience: Experience) => void;
}

export default ShowExperienceModalContent;
