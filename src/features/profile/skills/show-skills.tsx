import { Box } from "@mui/material";
import { Skill } from "core/profiles/types";
import DeleteSkillModal from "./delete-skill-modal";
import SkillCard from "./skill-card";

const ShowSkills = ({ skills, isEditable }: ShowSkillsProps) => {
  return (
    <>
      {skills.map((item: Skill) => (
        <Box>
          <SkillCard item={item} />
          {isEditable && <DeleteSkillModal skillId={item.id} />}
        </Box>
      ))}
    </>
  );
};

interface ShowSkillsProps {
  skills: Skill[];
  isEditable: boolean;
}

export default ShowSkills;
