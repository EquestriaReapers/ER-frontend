import { Box } from "@mui/material";
import { Experience } from "core/profiles/types";
import ExperienceCard from "./experience-card";

const ShowExperiences = ({ experience }: Props) => {
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

interface Props {
  experience: Experience[];
}

export default ShowExperiences;
