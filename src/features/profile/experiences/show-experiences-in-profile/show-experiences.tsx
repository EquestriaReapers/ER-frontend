import { Box } from "@mui/material";
import { Experience } from "core/profiles/types";
import ExperienceCard from "./experience-card";

const ShowExperiencesInProfile = ({ experience }: ShowExperiencesProps) => {
  return (
    <Box>
      {experience.map((item: Experience) => {
        return (
          <Box key={item.id}>
            <ExperienceCard item={item} />
          </Box>
        );
      })}
    </Box>
  );
};

interface ShowExperiencesProps {
  experience: Experience[];
}

export default ShowExperiencesInProfile;
