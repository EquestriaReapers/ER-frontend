import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import { Skill } from "core/profiles/types";

const ShowSkills = ({ skills }: ShowSkillsProps) => {
  return (
    <>
      {skills.map((item: Skill) => (
        <Box>
          <Typography key={item.id} variant="h6">
            {item.name}
          </Typography>
          <DeleteIcon />
        </Box>
      ))}
    </>
  );
};

interface ShowSkillsProps {
  skills: Skill[];
}

export default ShowSkills;
