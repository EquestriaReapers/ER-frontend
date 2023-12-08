import { Box } from "@mui/material";
import { Experience } from "core/profiles/types";
import ModalExperienceCard from "./modal-experience-card";
import DeleteExperienceModal from "../../delete-experience/modal";

const ModalShowExperiences = ({ experience }: ShowExperiencesProps) => {
  return (
    <Box>
      {experience.map((item: Experience) => {
        return (
          <Box key={item.id}>
            <ModalExperienceCard item={item} />
            {<DeleteExperienceModal skillId={item.id} />}
          </Box>
        );
      })}
    </Box>
  );
};

interface ShowExperiencesProps {
  experience: Experience[];
}

export default ModalShowExperiences;
