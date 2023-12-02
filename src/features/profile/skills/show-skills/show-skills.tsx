import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Skill } from "core/profiles/types";
import DeleteSkillModal from "../delete-skills/modal"; // {isEditable && <DeleteSkillModal skillId={item.id} />}, debajo de skill card
import SkillCard from "./skill-card";
import { skillBoxStyle } from "./styles/styles";

const ShowSkills = ({ skills, isEditable }: ShowSkillsProps) => {
  return (
    <div>
      <Grid container md={7} xs={12}>
        {skills.map((item: Skill) => (
          <Grid item key={item.id} md={1.8}>
            <Box sx={skillBoxStyle}>
              <SkillCard item={item} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

interface ShowSkillsProps {
  skills: Skill[];
  isEditable: boolean;
}

export default ShowSkills;
