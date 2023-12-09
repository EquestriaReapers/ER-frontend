import { Box, IconButton } from "@mui/material";
import { Experience } from "core/profiles/types";
import DeleteIcon from "@mui/icons-material/Delete";
import ModalExperienceCard from "./modal-experience-card";
import EditIcon from "@mui/icons-material/Edit";
import { ExperienceContent } from "../../types";

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
                setContent(ExperienceContent.Edit);
                setAnExperience(item);
              }}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              onClick={() => {
                setContent(ExperienceContent.Delete);
                setAnExperience(item);
              }}
            >
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
  setContent: (arg0: ExperienceContent) => void;
  setAnExperience: (anExperience: Experience | null) => void;
}

export default ModalShowExperiences;
