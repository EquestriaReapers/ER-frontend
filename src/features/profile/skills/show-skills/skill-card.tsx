import Typography from "@mui/material/Typography";
import { Skill } from "core/profiles/types";

const SkillCard = ({ item }: Props) => {
  return (
    <div>
      <Typography variant="h6">{item.name}</Typography>
    </div>
  );
};

interface Props {
  item: Skill;
}
export default SkillCard;
