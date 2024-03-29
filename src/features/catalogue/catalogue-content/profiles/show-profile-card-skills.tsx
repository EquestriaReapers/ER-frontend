import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Skill } from "core/profiles/types";
import { skillTitleStyles } from "./styles";

const ShowProfileCardSkills = ({ skills }: Props) => {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      {skills.slice(0, 12).map((skill) => (
        <Typography key={skill.id} sx={skillTitleStyles}>
          {skill.name}
        </Typography>
      ))}
    </Box>
  );
};

interface Props {
  skills: Skill[];
}
export default ShowProfileCardSkills;
