import { Box } from "@mui/material";
import { Skill } from "core/profiles/types";
import DeleteSkillModal from "../delete-skills/modal";
import SkillCard from "./skill-card";

const ShowSkills = ({ skills, isEditable }: Props) => {
  return (
    <>
      {skills.map((item: Skill) => (
        <Box key={item.id}>
          <SkillCard item={item} />
          {isEditable && <DeleteSkillModal skillId={item.id} />}
        </Box>
      ))}
    </>
  );
};

interface Props {
  skills: Skill[];
  isEditable: boolean;
}

export default ShowSkills;
