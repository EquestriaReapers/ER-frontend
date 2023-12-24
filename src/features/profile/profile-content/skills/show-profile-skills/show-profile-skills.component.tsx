import { Box } from "@mui/material";
import { Skill } from "core/profiles/types";
import SkillCard from "./skill-card";
import { skillBoxStyles } from "features/profile/skills/show-skills/styles/styles";

const ShowProfileSkills = ({ skills }: Props) => {
  return (
    <Box sx={skillBoxStyles}>
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

export default ShowProfileSkills;
