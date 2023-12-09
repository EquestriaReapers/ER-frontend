import { Box } from "@mui/material";
import { Experience } from "core/profiles/types";
import ExperienceCard from "./experience-card";

const ShowExperiencesInProfile = ({ experiencies }: Props) => {
  return (
    <Box>
      {experiencies.map((item: Experience) => {
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
  experiencies: Experience[];
}

export default ShowExperiencesInProfile;
