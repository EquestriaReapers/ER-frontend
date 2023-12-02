import Typography from "@mui/material/Typography";
import { Skill } from "core/profiles/types";

const SkillCard = ({ item }: { item: Skill }) => {
  return (
    <div>
      <Typography variant="h6" margin="8px">
        {item.name}
      </Typography>
    </div>
  );
};

export default SkillCard;
