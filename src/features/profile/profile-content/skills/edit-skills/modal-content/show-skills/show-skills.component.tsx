import { Box } from "@mui/material";
import { Skill } from "core/profiles/types";
import SkillCard from "./skill-card.component";
import { boxStyles } from "./styles";

const ShowSkills = ({ skills }: Props) => {
  return (
    <Box sx={boxStyles}>
      {skills.map((item: Skill) => {
        return (
          <Box key={item.id}>
            <SkillCard item={item} />
          </Box>
        );
      })}
    </Box>
  );
};

interface Props {
  skills: Skill[];
}

export default ShowSkills;
