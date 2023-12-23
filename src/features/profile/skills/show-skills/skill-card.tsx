import Typography from "@mui/material/Typography";
import { Skill } from "core/profiles/types";
import { skillTitleStyles } from "./styles/styles";

const SkillCard = ({ item }: Props) => {
  return (
    <div>
      <Typography sx={skillTitleStyles} variant="h6">
        {item.name}
      </Typography>
    </div>
  );
};

interface Props {
  item: Skill;
}
export default SkillCard;
