import { Typography, Box } from "@mui/material";
import { Skill } from "core/profiles/types";
import { skillTitleStyles } from "./styles";
import ClearIcon from "@mui/icons-material/Clear";

const SkillCard = ({ item }: Props) => {
  console.log(item);
  return (
    <Box>
        <Typography sx={skillTitleStyles} variant="h6">
          {item.name}
          <ClearIcon />
        </Typography>
    </Box>
  );
};

interface Props {
  item: Skill;
}
export default SkillCard;
