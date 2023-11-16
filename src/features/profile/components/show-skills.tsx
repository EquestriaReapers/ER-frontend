import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Skill } from "core/profiles/types";

const ShowSkills: React.FC<ShowSkillsProps> = ({ skills }) => {
  return (
    <Box>
      {skills.map((item: Skill) => (
        <Typography key={item.id} variant="h6">
          {item.name}
        </Typography>
      ))}
    </Box>
  );
};

interface ShowSkillsProps {
  skills: Skill[];
}

export default ShowSkills;
