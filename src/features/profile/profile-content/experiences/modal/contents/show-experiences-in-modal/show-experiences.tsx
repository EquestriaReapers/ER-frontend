import { Box, IconButton } from "@mui/material";
import { Experience } from "core/profiles/types";
import DeleteIcon from "@mui/icons-material/Delete";
import ModalExperienceCard from "./modal-experience-card";
import EditIcon from "@mui/icons-material/Edit";
import { ExperienceContent } from "../../experiencies-modal-context/types";
import ExperiencesModalContext from "../../experiencies-modal-context";
import { useContext } from "react";

const ModalShowExperiences = () => {
  const { experiences, setContent, setAnExperience } = useContext(
    ExperiencesModalContext
  );

  return (
    <Box>
      {experiences.map((item: Experience) => {
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

export default ModalShowExperiences;
