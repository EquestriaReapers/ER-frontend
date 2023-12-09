import { Box } from "@mui/material";
import { Experience } from "core/profiles/types";
import ExperienceCard from "./experience-card";

const ShowProfileExperiencies = ({ experiences }: Props) => {
  return (
    <Box>
      {experiences.map((item: Experience) => {
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
  experiences: Experience[];
}

export default ShowProfileExperiencies;
