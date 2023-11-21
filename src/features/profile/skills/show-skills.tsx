import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { Skill } from "core/profiles/types";
import DeleteSkillModal from "./delete-skills/delete-skill-modal";

const ShowSkills = ({ skills }: ShowSkillsProps) => {
  return (
    <>
      {skills.map((item: Skill) => (
        <Box>
          <Typography key={item.id} variant="h6">
            {item.name}
          </Typography>
          <DeleteSkillModal skillId={item.id}/>
        </Box>
      ))}
    </>
  );
};

interface ShowSkillsProps {
  skills: Skill[];
}

export default ShowSkills;
