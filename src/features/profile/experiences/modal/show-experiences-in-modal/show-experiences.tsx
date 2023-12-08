import { Box, IconButton } from "@mui/material";
import { Experience } from "core/profiles/types";
import DeleteIcon from "@mui/icons-material/Delete";
import ModalExperienceCard from "./modal-experience-card";
import EditIcon from "@mui/icons-material/Edit";

const ModalShowExperiences = ({
  experience,
  setContent,
  setAnExperience,
}: ShowExperiencesProps) => {
  return (
    <Box>
      {experience.map((item: Experience) => {
        return (
          <Box key={item.id}>
            <ModalExperienceCard item={item} />
            <IconButton
              onClick={() => {
                setContent(2);
                setAnExperience(item);
              }}
            >
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => setContent}>
              <DeleteIcon />
            </IconButton>
          </Box>
        );
      })}
    </Box>
  );
};

interface ShowExperiencesProps {
  experience: Experience[];
  setContent: (arg0: number) => void;
  setAnExperience: (arg0: Experience) => void;
}

export default ModalShowExperiences;
