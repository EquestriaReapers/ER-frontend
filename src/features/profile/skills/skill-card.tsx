import Typography from "@mui/material/Typography";
import { Skill } from "core/profiles/types";

const SkillCard = ({ item }: { item: Skill }) => {
  return (
    <div>
      <Typography key={item.id} variant="h6">
        {item.name}
      </Typography>
    </div>
  );
};

export default SkillCard;
